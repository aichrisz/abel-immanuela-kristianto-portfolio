from pathlib import Path
import subprocess
import urllib.request
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'assets' / 'portfolio'
OUT.mkdir(parents=True, exist_ok=True)

PROJECTS = [
    ('captcha-hell', 'https://aichrisz.github.io/captcha-hell/'),
    ('website-that-slowly-dies', 'https://aichrisz.github.io/website-that-slowly-dies/'),
    ('one-button-universe', 'https://aichrisz.github.io/one-button-universe/'),
]
PORTRAIT_URL = 'https://nxhpiqjxoftjiyfwimno.supabase.co/storage/v1/object/public/avatars/e4e630aa-1f7e-4e22-91cd-75116a2a82d6/avatar-1778859149484.png?v=1778859151059'


def crop_to_card(src: Path, dest: Path):
    im = Image.open(src).convert('RGB')
    # Wide desktop card asset.
    target_ratio = 16 / 10
    w, h = im.size
    current = w / h
    if current > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(w / target_ratio)
        top = max(0, (h - new_h) // 3)
        box = (0, top, w, top + new_h)
    im.crop(box).resize((1600, 1000), Image.Resampling.LANCZOS).save(dest, 'WEBP', quality=88)


def crop_to_mobile_card(src: Path, dest: Path):
    im = Image.open(src).convert('RGB')
    # Portrait-ish mobile card asset, closer to the 320-390px card aspect.
    target_ratio = 9 / 16
    w, h = im.size
    current = w / h
    if current > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(w / target_ratio)
        top = max(0, (h - new_h) // 4)
        box = (0, top, w, top + new_h)
    im.crop(box).resize((900, 1600), Image.Resampling.LANCZOS).save(dest, 'WEBP', quality=88)


def make_private_kairo_card(dest: Path):
    # Safe concept image: no private operational data, only a redacted product-style mock.
    from PIL import ImageDraw, ImageFont
    im = Image.new('RGB', (1600, 1000), '#050505')
    draw = ImageDraw.Draw(im)
    try:
        title_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 72)
        body_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 32)
        mono_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 26)
    except Exception:
        title_font = body_font = mono_font = None
    # dashboard shell
    draw.rounded_rectangle((110, 90, 1490, 910), radius=38, fill='#111111', outline='#2a2a2a', width=2)
    draw.rounded_rectangle((145, 130, 445, 870), radius=28, fill='#181818', outline='#272727')
    try:
        side_title_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 54)
    except Exception:
        side_title_font = title_font
    draw.text((185, 190), 'Kei OS', fill='white', font=side_title_font)
    draw.text((185, 285), 'PRIVATE CONCEPT', fill='#9ca3af', font=body_font)
    for i, label in enumerate(['Today', 'Body', 'Work', 'Home', 'Food']):
        y = 370 + i * 72
        draw.rounded_rectangle((185, y, 390, y + 46), radius=23, fill='#242424')
        draw.text((215, y + 10), label, fill='#e5e7eb', font=mono_font)
    # main cards
    draw.text((515, 170), 'Calm daily OS', fill='white', font=title_font)
    draw.text((515, 260), 'shift-aware · no-shame · minimum-first', fill='#a3a3a3', font=body_font)
    cards = [
        ('Next tiny step', 'Pack gym bag · 2 min'),
        ('Energy mode', 'Minimum mode is valid'),
        ('Focus lane', '3 active tasks max'),
        ('Private memory', 'Secrets redacted'),
    ]
    for i, (a, b) in enumerate(cards):
        x = 515 + (i % 2) * 455
        y = 370 + (i // 2) * 210
        draw.rounded_rectangle((x, y, x + 410, y + 160), radius=28, fill='#1b1b1b', outline='#303030')
        draw.text((x + 34, y + 34), a, fill='#f5f5f5', font=body_font)
        draw.text((x + 34, y + 88), b, fill='#9ca3af', font=mono_font)
    draw.rounded_rectangle((515, 805, 1390, 850), radius=22, fill='#242424')
    draw.text((545, 814), 'No private live data shown in this portfolio screenshot.', fill='#d4d4d4', font=mono_font)
    im.save(dest, 'WEBP', quality=90)


def main():
    chromium = subprocess.check_output("command -v chromium || command -v chromium-browser || command -v google-chrome", shell=True, text=True).strip()
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, executable_path=chromium, args=['--no-sandbox'])
        desktop = browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
        mobile = browser.new_page(viewport={'width': 390, 'height': 760}, device_scale_factor=2, is_mobile=True)

        def seed_universe(page):
            for label in ['Start a new universe', 'Act on the universe']:
                try:
                    page.get_by_label(label).click(timeout=2500)
                except Exception:
                    pass
            for _ in range(14):
                page.mouse.click(195, 430)
                page.wait_for_timeout(80)
            page.wait_for_timeout(1200)

        for slug, url in PROJECTS:
            desktop.goto(url, wait_until='networkidle', timeout=60000)
            desktop.wait_for_timeout(1500)
            if slug == 'one-button-universe':
                seed_universe(desktop)
            raw = OUT / f'{slug}.png'
            desktop.screenshot(path=str(raw), full_page=False)
            crop_to_card(raw, OUT / f'{slug}.webp')
            raw.unlink(missing_ok=True)

            mobile.goto(url, wait_until='networkidle', timeout=60000)
            mobile.wait_for_timeout(1500)
            if slug == 'one-button-universe':
                seed_universe(mobile)
            raw_mobile = OUT / f'{slug}-mobile.png'
            mobile.screenshot(path=str(raw_mobile), full_page=False)
            crop_to_mobile_card(raw_mobile, OUT / f'{slug}-mobile.webp')
            raw_mobile.unlink(missing_ok=True)
        browser.close()
    make_private_kairo_card(OUT / 'kairo-kei-os.webp')
    crop_to_mobile_card(OUT / 'kairo-kei-os.webp', OUT / 'kairo-kei-os-mobile.webp')
    portrait_raw = OUT / 'abel-aichrisz-avatar.png'
    urllib.request.urlretrieve(PORTRAIT_URL, portrait_raw)
    im = Image.open(portrait_raw).convert('RGB')
    im.resize((1024, 1024), Image.Resampling.LANCZOS).save(OUT / 'abel-aichrisz-avatar.webp', 'WEBP', quality=92)
    portrait_raw.unlink(missing_ok=True)
    for p in sorted(OUT.glob('*')):
        print(p.relative_to(ROOT), p.stat().st_size)

if __name__ == '__main__':
    main()
