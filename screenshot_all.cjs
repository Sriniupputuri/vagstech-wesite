const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  // Homepage full
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/ss_home_full.png', fullPage: true });

  // Games section (scroll into view)
  await page.evaluate(() => window.scrollTo(0, 480));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/ss_games.png' });

  // About page
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/ss_about.png', fullPage: true });

  // Games page
  await page.goto('http://localhost:3000/games', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/ss_games_page.png', fullPage: true });

  // Contact page
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:/Users/PC/AppData/Local/Temp/ss_contact.png', fullPage: true });

  await browser.close();
  console.log('done');
})();
