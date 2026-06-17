const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/home_wait.png', fullPage: true });
  // also scroll and screenshot games section
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/games_section.png' });
  await browser.close();
  console.log('done');
})();
