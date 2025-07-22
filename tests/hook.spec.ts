import {test} from '@playwright/test';

test.beforeEach("login test",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    
    
   
});

test("Home Page test",async({page})=>{
     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
    await page.pause();
});


test('test', async ({ page }) => {
  await page.locator('#inventory_container').nth(1).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
