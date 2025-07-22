import {test,expect,Browser,Locator,chromium, BrowserContext, Page} from '@playwright/test';
import { channel } from 'diagnostics_channel';

test('BrowserContext',async()=>{
    const browser: Browser = await chromium.launch({headless:false,channel:"chrome"});

    //browsercontext-1
    const browserContext_1: BrowserContext = await browser.newContext();
    const page1:Page = await browserContext_1.newPage();
    //browsercontext-2
    const browserContext_2: BrowserContext = await browser.newContext();
    const page2:Page = await browserContext_2.newPage();

    //page 1
    await page1.goto('http://quiz.hematitecorp.com/#/');
    const email1: Locator = await page1.locator("#email");
    const password1: Locator = await page1.locator("#password");
    const submitButton1: Locator = await page1.locator("[type='submit']");
    await email1.fill("fahimbasha00@gmail.com");
    await password1.fill("Fahim@ece123");
    await submitButton1.click();


    //page 2
    await page2.goto('http://quiz.hematitecorp.com/#/');
    const email2: Locator = await page1.locator("#email");
    const password2: Locator = await page1.locator("#password");
    const submitButton2: Locator = await page1.locator("[type='submit']");
    await email2.fill("rajapandi");
    await password2.fill("Fahim@ece123");
    await submitButton2.click();

    const title = await page1.title();
    console.log("Home Page title",title);
    await page1.screenshot({path:'VocherCode1.png'});
    await page2.screenshot({path:'VocherCode2.png'});
    expect(title).toEqual("Quiz App");

    //browser.close();



});