import {test,expect,chromium,Browser,Page,Locator} from '@playwright/test';

test('Checking login Page', async()=>{
    const browser: Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto('http://quiz.hematitecorp.com/#/');


    const email:Locator = await page.locator("#email");
    const password:Locator = await page.locator("#password");
   
    const button:Locator = await page.locator("[type='submit']");

    await email.fill("fahimbasha00@gamil.com");
    await password.fill("Fahim@ece123");
    await button.click();

    const title = await page.title();
    console.log("Home Page title",title);
    await page.screenshot({path:'VocherCode.png'});

   expect(title).toEqual("Quiz App");

  // browser.close();

});