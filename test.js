const puppeteer = require('puppeteer');

(async () => {
  // Mulai browser Puppeteer
  const browser = await puppeteer.launch({
    headless: false
  });

  // Buka browser
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  // Isi formulir
  await page.type('#name', 'kfsdkfmi');
  await page.type('#email', 'wewew@gmail.com');
  await page.type('#phone', '034238585435');

  // Submit formulir
  await page.click('button[type="submit"]');

  // Tunggu halaman merespons
  await page.waitForNavigation();

  // Verifikasi bahwa data telah disimpan dengan benar
  const formData = await page.evaluate(() => {
    return fetch('http://localhost:3000/api/form')
      .then(response => response.json());
  });

  // Tutup browser
  await browser.close();
})();
