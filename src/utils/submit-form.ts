const REQUEST_TIMEOUT_MS = 8000
const RETRY_DELAY_MS = 1500

type PostOptions = {
  // Only retry endpoints where a duplicate submission is harmless to the reader.
  attempts?: number
}

async function postOnce(url: string, body: unknown): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
      // A down provider often hangs instead of erroring; don't leave the user waiting.
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) return false

    // FormSubmit can answer 200 with { success: "false" } when it rejects a submission.
    const data = await response.json().catch(() => null)
    return !(data && (data.success === false || data.success === 'false'))
  } catch {
    return false
  }
}

export async function postJson(
  url: string,
  body: unknown,
  { attempts = 1 }: PostOptions = {}
): Promise<boolean> {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    if (await postOnce(url, body)) return true
    if (attempt < attempts) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS))
    }
  }
  return false
}

// Pre-filled email so a visitor can still reach us when every endpoint is down.
export function buildMailto(
  to: string,
  subject: string,
  fields: Record<string, string>
): string {
  const body = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n\n')
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
