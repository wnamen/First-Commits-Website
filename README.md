# First-Commits-Website

Next.js site, exported to static files and deployed to GitHub Pages.

Run `npm install`, then `npm run dev` to develop or `npm run build` to export to `out/`.

## Sponsorship PDF

The three-page sponsorship package is available at `/sponsorship.html` after
deployment: community overview, annual offer, and draft sponsorship agreement.
Keep it out of site navigation and the sitemap. Anyone with the URL can open or
forward it; this is not access control.

The viewer has a `noindex` robots meta tag and embeds the PDF as a browser-local
blob for preview and download. Do not publish a standalone `/sponsorship.pdf`:
GitHub Pages cannot configure the `X-Robots-Tag` response header needed to
exclude that PDF from Google indexing. Allow crawlers to read the viewer's
noindex tag; do not block `/sponsorship.html` in robots.txt. The retired PDF URL
returns 404 after deployment. Production indexing behavior must be checked after
deployment; local verification cannot establish Google's index state.

To revise the copy or layout, edit `scripts/build-sponsorship-pdf.py` and run it
with Python, `pymupdf`, and `fonttools` installed. It generates the review artifact at
`output/pdf/first-commits-sponsorship.pdf` and the viewer at
`public/sponsorship.html`, using `scripts/sponsorship-viewer.html` as its template.
Commit the generated viewer after regenerating. Keep the standalone PDF local
(ignored by Git) so it does not gain an independently accessible URL in this
public repository. Python is not needed for the normal website build.

The member-company roster is read from the homepage. The 100+ members and 10+
events figures were supplied by the organizer. The agreement is a draft with
First Commits, LLC as Organizer and sponsor-name, start-date, payment-date, and
signature fields to complete before use.

The PDF matches the current homepage: Mont Heavy for headings, Hanken Grotesk
for body copy, and forest/lime/porcelain colors read from `src/app/globals.css`.
Mont uses the existing site font file. Hanken Grotesk is bundled in `scripts/fonts/`
from Google Fonts (`google/fonts`, `ofl/hankengrotesk`) with its OFL license.
These match the site's current substitutes for Bernoru Expanded and Acherus
Grotesque; the older design-system HTML predates the homepage typography.
