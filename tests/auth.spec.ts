import {Page, Browser, BrowserContext, chromium, test} from "@playwright/test";

test("auth test",async ()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserContext_1:BrowserContext = await browser.newContext();
    const page:Page = await browserContext_1.newPage();

    

    const userId:string = "fahimbasha00@gmail.com";
    const userPass:string = "admin@123";
    const authHeader:string = "Basic "+btoa(userId+":"+userPass);
    page.setExtraHTTPHeaders({Authorization:authHeader});
    await page.goto("http://quiz.hematitecorp.com/");
    
    
    // browserContext_1.close();
    // browser.close();

    

});