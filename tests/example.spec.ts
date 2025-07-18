import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('has title',async({page})=>{

//   await page.goto('https://www.oracle.com/in/');

//   await expect(page).toHaveTitle("Oracle India | Cloud Applications and Cloud Platform");

// });

test('checking addition',async({page})=>{
  await page.goto('http://127.0.0.1:5500/Calculator/calculator.html');
  await page.fill("#txt1","5");
  await page.fill("#txt2","5");
  await page.click("#btnadd");

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('10');
});

test('checking subtraction',async({page})=>{
  await page.goto('http://127.0.0.1:5500/Calculator/calculator.html');
  await page.fill("#txt1","5");
  await page.fill("#txt2","2");
  await page.click("#btnsub");

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('3');
});

test('checking Multiplication',async({page})=>{
  await page.goto('http://127.0.0.1:5500/Calculator/calculator.html');
  await page.fill("#txt1","5");
  await page.fill("#txt2","5");
  await page.click("#btnmul");

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('25');
});

test('checking Division',async({page})=>{
  await page.goto('http://127.0.0.1:5500/Calculator/calculator.html');
  await page.fill("#txt1","6");
  await page.fill("#txt2","2");
  await page.click("#btndiv");

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('3');
});