"""Generate the unlisted three-page sponsorship package with the current website's brand assets.

Requires pymupdf and fonttools. No Python dependency is needed at site build time.
"""

from io import BytesIO
from datetime import date
from pathlib import Path
import re
import base64
import math

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
import pymupdf


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/first-commits-sponsorship.pdf"
PUBLIC = ROOT / "public/sponsorship.html"
TOKENS = (ROOT / "src/app/globals.css").read_text()
WIDTH, HEIGHT = 612, 792
MARGIN = 48
CONTENT_WIDTH = WIDTH - 2 * MARGIN
# Update when the sponsorship document changes, not on an unchanged rebuild.
LAST_UPDATED = date(2026, 9, 18)


def color(token):
    value = re.search(rf"--color-{token}:\s*#([0-9a-fA-F]{{6}});", TOKENS)
    if value is None:
        raise ValueError(f"Missing website color token: {token}")
    return tuple(int(value[1][i:i + 2], 16) / 255 for i in (0, 2, 4))


FOREST = color("forest")
PORCELAIN = color("porcelain")
LIME = color("lime")
# Match the homepage's forest text at 72% opacity on porcelain.
BODY = tuple(0.72 * ink + 0.28 * paper for ink, paper in zip(FOREST, PORCELAIN))


def body_font(weight):
    source = TTFont(ROOT / "scripts/fonts/HankenGrotesk.ttf")
    font = instantiateVariableFont(source, {"wght": weight}, inplace=True)
    data = BytesIO()
    font.save(data)
    return pymupdf.Font(fontbuffer=data.getvalue())


def paragraph(page, text, x, top, width, font, size=11, ink=BODY, leading=1.5):
    """Wrap using embedded font metrics; return the next available text position."""
    lines = []
    line = ""
    for word in text.split():
        candidate = f"{line} {word}".strip()
        if font.text_length(candidate, fontsize=size) > width and line:
            lines.append(line)
            line = word
        else:
            line = candidate
    if line:
        lines.append(line)
    writer = pymupdf.TextWriter(page.rect)
    for index, line in enumerate(lines):
        assert font.text_length(line, fontsize=size) <= width
        writer.append((x, top + size + index * size * leading), line,
                      font=font, fontsize=size)
    writer.write_text(page, color=ink)
    return top + len(lines) * size * leading


def new_page(doc, display, regular, label):
    page = doc.new_page(width=WIDTH, height=HEIGHT)
    page.draw_rect(page.rect, color=None, fill=PORCELAIN)
    # Match Nav.module.css at 0.75 pt per CSS px: Mont Heavy uppercase,
    # 0.55rem x 1.1rem lime cursor, 0.4rem gap, and 0.01em tracking.
    logo_size = 1.15 * 16 * 0.75
    cursor_width, cursor_height = 0.55 * 12, 1.1 * 12
    page.draw_rect(pymupdf.Rect(MARGIN, 40, MARGIN + cursor_width,
                               40 + cursor_height), color=None, fill=LIME)
    writer = pymupdf.TextWriter(page.rect)
    x = MARGIN + cursor_width + 0.4 * 12
    for character in "FIRST COMMITS":
        writer.append((x, 52), character, font=display, fontsize=logo_size)
        x += display.text_length(character, fontsize=logo_size) + logo_size * 0.01
    writer.write_text(page, color=FOREST)
    label_width = regular.text_length(label, fontsize=9)
    paragraph(page, label, WIDTH - MARGIN - label_width, 42, label_width + 1, regular, 9, FOREST)
    return page


def offer_page(doc, display, regular):
    page = new_page(doc, display, regular, "SPONSORSHIP")
    title = "Annual Sponsorship"
    title_size = 34
    title_width = display.text_length(title, fontsize=title_size)
    assert title_width <= CONTENT_WIDTH
    paragraph(page, title, MARGIN, 116, CONTENT_WIDTH, display, title_size, FOREST)

    page.draw_rect(pymupdf.Rect(MARGIN, 245, 564, 313), color=None, fill=LIME)
    paragraph(page, "$5,000", 64, 264, 150, display, 26, FOREST)
    term = "Annual sponsorship"
    term_width = regular.text_length(term, fontsize=11)
    term_x = WIDTH - MARGIN - 16 - term_width
    paragraph(page, term, term_x, 272, term_width + 1, regular, 11, FOREST)

    benefits = [
        ("01", "One fully organized community event",
         "The First Commits team will plan and run one dinner or social event "
         "with our community during your sponsorship year. We will coordinate "
         "the date and details with you and reserve at least two spots for "
         "members of your team to attend. The $5,000 fee covers event planning "
         "and hosting, including venue, food, and drinks."),
        ("02", "Connect with the community",
         "Throughout the year, you can come to us for connections with founding "
         "engineers and others in our network. We will help make relevant "
         "introductions where there is mutual interest."),
        ("03", "Share jobs and promotional credits",
         "Throughout the year, send us your job postings, promotional credits, "
         "and member offers. We will share relevant opportunities and offers "
         "in the First Commits community Slack."),
    ]
    top = 343
    for number, title, body in benefits:
        paragraph(page, number, MARGIN, top + 2, 25, regular, 9, FOREST)
        bottom = paragraph(page, title, 82, top, 482, display, 12, FOREST)
        bottom = paragraph(page, body, 82, bottom + 8, 482, regular)
        top = bottom + 25

    assert bottom < 640, "Body copy overlaps the sponsorship term"
    paragraph(page, "Sponsorship covers 12 months from the agreed start date.",
              MARGIN, 663, CONTENT_WIDTH, regular, 9)
    footer(page, regular, 2)


def footer(page, regular, number):
    page.draw_line((MARGIN, 689), (564, 689), color=BODY, width=0.4)
    email = "partnerships@firstcommits.com"
    email_width = regular.text_length(email, fontsize=10)
    email_x = MARGIN
    paragraph(page, email, email_x, 712, email_width + 1, regular, 10, FOREST)
    page.insert_link({"kind": pymupdf.LINK_URI,
                      "from": pymupdf.Rect(email_x, 710, email_x + email_width, 727),
                      "uri": f"mailto:{email}"})
    updated_label = f"Last updated {LAST_UPDATED:%B} {LAST_UPDATED.day}, {LAST_UPDATED.year}"
    updated_width = regular.text_length(updated_label, fontsize=8)
    paragraph(page, updated_label, WIDTH - MARGIN - updated_width, 714,
              updated_width + 1, regular, 8)
    paragraph(page, f"{number} / 3", WIDTH - MARGIN - 22, 750, 23, regular, 8)


def overview_page(doc, display, regular):
    page = new_page(doc, display, regular, "OUR COMMUNITY")
    paragraph(page, "The First Commits community", MARGIN, 108,
              CONTENT_WIDTH, display, 26, FOREST)
    paragraph(page,
              "First Commits brings together founding engineers building their "
              "companies' earliest products and systems. "
              "Through small gatherings and an active community Slack, members "
              "share experience, find peers, and build lasting relationships.",
              MARGIN, 158, CONTENT_WIDTH, regular, 12)
    page.draw_rect(pymupdf.Rect(MARGIN, 244, 564, 312), color=None, fill=LIME)
    for x, number, caption in [(64, "100+", "members strong"),
                               (324, "10+", "events held")]:
        paragraph(page, number, x, 255, 150, display, 26, FOREST)
        paragraph(page, caption, x, 288, 210, regular, 10, FOREST)
    paragraph(page, "Companies represented by our members", MARGIN, 340,
              CONTENT_WIDTH, display, 13, FOREST)
    # Reuse the homepage's member-company roster; this is not a sponsor list.
    source = (ROOT / "src/app/page.tsx").read_text()
    match = re.search(r"const representedStartups = \[(.*?)\]", source, re.S)
    if match is None:
        raise ValueError("Homepage member-company roster not found")
    companies = sorted(re.findall(r"'([^']+)'", match[1]), key=str.casefold)
    assert companies, "Member-company roster is empty"
    rows = math.ceil(len(companies) / 4)
    for index, company in enumerate(companies):
        column, row = divmod(index, rows)
        bottom = paragraph(page, company, MARGIN + column * 132, 379 + row * 12,
                           120, regular, 8.6)
        assert bottom < 665, "Company roster exceeds overview page"
    footer(page, regular, 1)


def blank(page, label, x, top, width, regular):
    paragraph(page, label, x, top, width, regular, 8)
    page.draw_line((x, top + 30), (x + width, top + 30), color=BODY, width=0.4)


def agreement_page(doc, display, regular):
    page = new_page(doc, display, regular, "AGREEMENT")
    paragraph(page, "Sponsorship Agreement", MARGIN, 101,
              CONTENT_WIDTH, display, 27, FOREST)
    paragraph(page, "Organizer", MARGIN, 151, CONTENT_WIDTH, regular, 8)
    paragraph(page, "First Commits, LLC", MARGIN, 165, CONTENT_WIDTH, regular, 12, FOREST)
    blank(page, "Sponsor legal name", MARGIN, 191, CONTENT_WIDTH, regular)
    blank(page, "Sponsorship start date", MARGIN, 231, 246, regular)
    blank(page, "Payment due date (agreed by both parties)", 318, 231, 246, regular)
    terms = [
        ("1. Fee and term",
         "Sponsor agrees to pay Organizer US $5,000 by the payment due date above "
         "for a 12-month sponsorship beginning on the start date above."),
        ("2. Sponsorship benefits",
         "Organizer will provide the benefits on page 2, which forms part of this "
         "agreement: one fully organized dinner or social event with at least two "
         "Sponsor seats; relevant introductions throughout the year, subject to mutual "
         "interest; and sharing relevant jobs, promotional credits, and offers in the "
         "community Slack throughout the year. The fee includes event planning, "
         "venue, food, and drinks, with no additional event charge to Sponsor."),
        ("3. Coordination and changes",
         "The parties will agree on the event date and details. Sponsor will provide "
         "the materials it asks Organizer to share. Introductions and sharing do not "
         "guarantee hires, sales, or member participation. Changes, rescheduling, or "
         "cancellation and any related refund must be agreed in writing by both parties."),
    ]
    top = 281
    for title, text in terms:
        top = paragraph(page, title, MARGIN, top, CONTENT_WIDTH, display, 10.5, FOREST)
        top = paragraph(page, text, MARGIN, top + 4, CONTENT_WIDTH, regular, 9.5) + 12
    assert top < 555, "Agreement terms overlap signatures"
    paragraph(page, "By signing below, each signer confirms authority to bind the named party and agrees to these terms.",
              MARGIN, 549, CONTENT_WIDTH, regular, 9)
    for x, label in [(MARGIN, "FOR FIRST COMMITS, LLC"), (318, "FOR SPONSOR")]:
        paragraph(page, label, x, 580, 246, regular, 9, FOREST)
        blank(page, "Signature", x, 599, 246, regular)
        blank(page, "Name / title", x, 635, 158, regular)
        blank(page, "Date", x + 170, 635, 76, regular)
    footer(page, regular, 3)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    display = pymupdf.Font(fontfile=str(ROOT / "src/app/fonts/Mont-HeavyDEMO.otf"))
    regular = body_font(500)
    doc = pymupdf.open()
    overview_page(doc, display, regular)
    offer_page(doc, display, regular)
    agreement_page(doc, display, regular)
    doc.set_metadata({"title": "Sponsorship Package | First Commits",
                      "author": "First Commits",
                      "subject": "Community overview, annual sponsorship, and draft agreement"})
    doc.save(OUTPUT, garbage=4, deflate=True)
    doc.close()
    template = (ROOT / "scripts/sponsorship-viewer.html").read_text()
    encoded = base64.b64encode(OUTPUT.read_bytes()).decode("ascii")
    PUBLIC.write_text(template.replace("__PDF_BASE64__", encoded))
    print(f"Created {OUTPUT} and {PUBLIC}")


if __name__ == "__main__":
    build()
