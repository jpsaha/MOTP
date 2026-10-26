
#!/usr/bin/env python3

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import re


# ============================================================
# 1. CONFIGURATION
# ============================================================

ROOT = Path(__file__).resolve().parent

SITE_DIR = ROOT / "_site"
PDF_DIR = ROOT / "assets" / "pdf"

# Local development hosts whose URLs should be checked.
LOCAL_HOSTS = {"localhost", "127.0.0.1"}


# ============================================================
# 2. HTML LINK PARSER
# ============================================================

class PDFLinkParser(HTMLParser):
    """Extract href attributes from HTML anchor elements."""

    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() != "a":
            return

        for name, value in attrs:
            if name.lower() == "href" and value:
                self.links.append(value)


# ============================================================
# 3. PDF LINK CHECKING
# ============================================================

def main():
    missing = set()
    checked = set()

    if not SITE_DIR.is_dir():
        raise SystemExit(
            "Error: _site/ not found. Build the Jekyll site first."
        )

    # Match the PDF path after assets/pdf/.
    pdf_pattern = re.compile(r"/assets/pdf/(.+\.pdf)$", re.I)

    for html_file in SITE_DIR.rglob("*.html"):
        parser = PDFLinkParser()

        parser.feed(
            html_file.read_text(
                encoding="utf-8",
                errors="replace",
            )
        )

        for href in parser.links:
            parsed = urlparse(href)

            # Ignore external URLs, but allow local development URLs.
            if parsed.scheme and parsed.netloc:
                if parsed.hostname not in LOCAL_HOSTS:
                    continue

            path = unquote(parsed.path)

            # Match links containing assets/pdf/, including links
            # with a site base URL such as /MOTP/assets/pdf/.
            match = pdf_pattern.search(path)

            if not match:
                continue

            relative_pdf = Path(match.group(1))
            pdf_file = PDF_DIR / relative_pdf
            key = relative_pdf.as_posix()

            checked.add(key)

            if not pdf_file.is_file():
                missing.add(
                    (
                        key,
                        html_file.relative_to(SITE_DIR).as_posix(),
                        href,
                    )
                )

    # --------------------------------------------------------
    # 4. REPORT
    # --------------------------------------------------------

    print(f"PDF links checked: {len(checked)}")
    print(f"Missing PDF links: {len(missing)}")

    for pdf, html, href in sorted(missing):
        print(f"MISSING: {pdf}")
        print(f"  HTML: {html}")
        print(f"  Link: {href}")


if __name__ == "__main__":
    main()
