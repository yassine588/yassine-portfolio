import os
import re

PORTFOLIO_DIR = r"C:\Users\a\.gemini\antigravity\scratch\yassine-portfolio"

def test_portfolio():
    required_files = [
        "index.html",
        "styles.css",
        "app.js",
        "README.md",
        "CV_Yassine_Karfouh_EN.pdf",
        "CV_Yassine_Karfouh_FR.pdf",
    ]
    for fname in required_files:
        fpath = os.path.join(PORTFOLIO_DIR, fname)
        assert os.path.exists(fpath), f"Missing required file: {fname}"
        assert os.path.getsize(fpath) > 100, f"File {fname} is unexpectedly empty or small"

    with open(os.path.join(PORTFOLIO_DIR, "index.html"), "r", encoding="utf-8") as f:
        html = f.read()
    with open(os.path.join(PORTFOLIO_DIR, "styles.css"), "r", encoding="utf-8") as f:
        css = f.read()
    with open(os.path.join(PORTFOLIO_DIR, "app.js"), "r", encoding="utf-8") as f:
        js = f.read()

    # 1. Check essential profile & contact info
    assert "Yassine Karfouh" in html
    assert "yassine.karfou7@gmail.com" in html
    assert "+216 96 236 615" in html
    assert "https://github.com/yassine588" in html
    assert "https://linkedin.com/in/yassine-karfouh" in html
    assert "CV_Yassine_Karfouh_EN.pdf" in html
    assert "CV_Yassine_Karfouh_FR.pdf" in html

    # 2. Check all 5 featured projects exist
    for project in ["LendLoop", "FactureScan", "BodyGuard System", "Corriger", "Life Guard"]:
        assert project in html, f"Missing project: {project}"

    # 3. Check 3 technical blog articles & native <dialog> modals
    for dialog_id in ["dialog-article-1", "dialog-article-2", "dialog-article-3"]:
        assert f'id="{dialog_id}"' in html, f"Missing dialog {dialog_id}"
        assert f'data-open-dialog="{dialog_id}"' in html, f"Missing trigger for {dialog_id}"

    # 4. Check modern-web-guidance compliance
    assert '<meta name="color-scheme" content="light dark">' in html
    assert 'closedby="any"' in html
    assert "role=\"dialog\"" not in html
    assert "aria-modal" not in html
    assert "overscroll-behavior: contain" in css
    assert "closedBy" in js

    # 5. Check NO graduation or project year ranges (e.g. 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026) appear in HTML or JS text
    forbidden_years = re.findall(r"\b(201[5-9]|202[0-7])\b", html + "\n" + js)
    assert not forbidden_years, f"Found forbidden date/year strings: {forbidden_years}"

    # 6. Check all data-i18n keys exist in both EN and FR dictionaries in app.js
    i18n_keys = set(re.findall(r'data-i18n="([^"]+)"', html))
    assert len(i18n_keys) >= 40, f"Expected at least 40 i18n keys, found {len(i18n_keys)}"
    for key in i18n_keys:
        assert f"{key}:" in js, f"Missing i18n key '{key}' in app.js dictionary"

    print(f"ALL TESTS PASSED! Verified {len(required_files)} files and {len(i18n_keys)} bilingual i18n keys with 0 date violations.")

if __name__ == "__main__":
    test_portfolio()
