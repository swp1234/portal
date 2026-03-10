#!/usr/bin/env python3
# Generator script for zigzag-runner blog posts in 11 languages
# Reads EN template, applies localization, writes output files
import os, re, json

BASE = "E:/Fire Project/projects/portal/blog"
EN_FILE = os.path.join(BASE, "en", "zigzag-runner-game-guide.html")
DATA_FILE = os.path.join(BASE, "_langs.json")

# Read EN template
with open(EN_FILE, "r", encoding="utf-8") as f:
    EN = f.read()

# Read language data
with open(DATA_FILE, "r", encoding="utf-8") as f:
    ALL_LANGS = json.load(f)

def generate(lang, data):
    """Generate a localized HTML file from EN template."""
    html = EN

    # Add x-default hreflang if not present
    if 'x-default' not in html:
        html = html.replace(
            '    <link rel="alternate" hreflang="en"',
            '    <link rel="alternate" hreflang="x-default" href="https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html">\n    <link rel="alternate" hreflang="en"'
        )

    # Add cross-promo.js if not present
    if 'cross-promo.js' not in html:
        html = html.replace(
            "    <script>\n        window.addEventListener('scroll'",
            '    <script src="/portal/js/cross-promo.js" defer></script>\n    <script>\n        window.addEventListener(\'scroll\''
        )

    # Change html lang
    html = html.replace('<html lang="en">', f'<html lang="{lang}">')

    # Change canonical (but not hreflangs - those should stay as-is)
    html = html.replace(
        '<link rel="canonical" href="https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html">',
        f'<link rel="canonical" href="https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html">'
    )

    # Change og:url
    html = html.replace(
        '<meta property="og:url" content="https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html">',
        f'<meta property="og:url" content="https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html">'
    )

    # Change inLanguage in JSON-LD
    html = html.replace('"inLanguage": "en"', f'"inLanguage": "{lang}"')

    # Change mainEntityOfPage
    html = html.replace(
        '"@id": "https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html"',
        f'"@id": "https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html"'
    )

    # Apply all text replacements from the data
    for old_text, new_text in data.get("replacements", []):
        count = html.count(old_text)
        if count == 0:
            print(f"    WARNING: '{old_text[:50]}...' not found in template")
        html = html.replace(old_text, new_text)

    # Write output
    out_path = os.path.join(BASE, lang, "zigzag-runner-game-guide.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  {lang}: {len(html):,} bytes")

print("Generating blog files...")
for lang, data in ALL_LANGS.items():
    generate(lang, data)
print("Done!")
