import { test as base, Browser, BrowserContext, chromium } from '@playwright/test';
 
type MyFixture={
    loggedInPage:any
}
 export const test = base.extend<MyFixture>({
  loggedInPage: async ({}, use:any) => {
    const browser:Browser=await chromium.launch();
    const context:BrowserContext = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/v1/index.html");
   
   
    await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
 
  await use(page);
  await context.close();
 
  }
});