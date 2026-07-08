from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'tmp-mobile-qa'
OUT.mkdir(exist_ok=True)
URL = 'http://127.0.0.1:5196/?v=mobile-qa'

script = """
() => {
  const imgData = [...document.images].map(img => ({
    alt: img.alt,
    src: img.currentSrc || img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    rect: (() => { const r = img.getBoundingClientRect(); return {w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y)} })(),
  }));
  const projects = [...document.querySelectorAll('#projects > div > button')].map((el) => {
    const r = el.getBoundingClientRect();
    return {h: Math.round(r.height), w: Math.round(r.width)};
  });
  const portrait = document.querySelector('img[alt="Portrait of Abel Immanuela Kristianto"]');
  const pr = portrait?.getBoundingClientRect();
  return {
    title: document.title,
    logo: document.querySelector('nav a')?.textContent?.trim(),
    viewport: {w: innerWidth, h: innerHeight},
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    heroFixed: getComputedStyle(document.querySelector('#home')).position,
    projectCards: projects,
    portraitRect: pr ? {w: Math.round(pr.width), h: Math.round(pr.height)} : null,
    images: imgData,
    jsOverlay: !!document.querySelector('vite-error-overlay'),
  }
}
"""

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path='/snap/bin/chromium', args=['--no-sandbox'])
    for width in (390, 320):
        page = browser.new_page(viewport={'width': width, 'height': 900}, device_scale_factor=2, is_mobile=True)
        page.goto(URL, wait_until='networkidle', timeout=60000)
        page.screenshot(path=str(OUT / f'mobile-{width}-top.png'), full_page=False)
        page.locator('#projects').scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT / f'mobile-{width}-projects.png'), full_page=False)
        page.locator('#about').scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT / f'mobile-{width}-about.png'), full_page=False)
        data = page.evaluate(script)
        print(width, data)
        page.close()
    browser.close()
print('screenshots', OUT)
