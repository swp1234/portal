# gen_data.py - Language data for zigzag-runner blog
# This file is imported by gen_engine.py
import json, os

BASE = "E:/Fire Project/projects/portal/blog"

# Read template
with open(os.path.join(BASE, "_template.html"), "r", encoding="utf-8") as f:
    TEMPLATE = f.read()

# Replacements per language: (old_string, new_string) pairs
# We replace EN-specific content with localized content

def make_file(lang, replacements):
    """Create a language file from EN template with text replacements."""
    html = TEMPLATE
    # Replace lang attribute
    html = html.replace('<html lang="en">', f'<html lang="{lang}">')
    # Replace canonical
    html = html.replace(
        'https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html',
        f'https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html'
    )
    # But keep hreflang en URLs as they are - need to restore them
    # Actually, the replace above will break hreflangs. Need surgical approach.
    # Reset and do it properly
    html = TEMPLATE

    # 1. Change html lang
    html = html.replace('<html lang="en">', f'<html lang="{lang}">')

    # 2. Change canonical only (not hreflangs)
    html = html.replace(
        '<link rel="canonical" href="https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html">',
        f'<link rel="canonical" href="https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html">'
    )

    # 3. Change og:url
    html = html.replace(
        '<meta property="og:url" content="https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html">',
        f'<meta property="og:url" content="https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html">'
    )

    # 4. Change inLanguage
    html = html.replace('"inLanguage": "en"', f'"inLanguage": "{lang}"')

    # 5. Change mainEntityOfPage @id
    html = html.replace(
        '"@id": "https://dopabrain.com/portal/blog/en/zigzag-runner-game-guide.html"',
        f'"@id": "https://dopabrain.com/portal/blog/{lang}/zigzag-runner-game-guide.html"'
    )

    # 6. Change breadcrumb blog link
    html = html.replace(
        'href="https://dopabrain.com/portal/blog/en/">Blog</a>',
        f'href="https://dopabrain.com/portal/blog/{lang}/">{replacements.get("bc_blog", "Blog")}</a>'
    )

    # 7. Change footer blog link
    html = html.replace(
        'href="https://dopabrain.com/portal/blog/en/">Blog</a>',
        f'href="https://dopabrain.com/portal/blog/{lang}/">{replacements.get("f_blog", "Blog")}</a>'
    )

    # 8. Apply all text replacements
    for old, new in replacements.get("text_replacements", []):
        html = html.replace(old, new)

    # Write file
    out_path = os.path.join(BASE, lang, "zigzag-runner-game-guide.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  {lang}: {len(html):,} bytes -> {out_path}")

print("gen_data.py loaded, make_file() ready")
