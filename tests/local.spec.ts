import { test, expect,chromium, Browser, Page, Locator} from '@playwright/test';


test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false,channel:"chrome"});
    const page: Page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/form.html');
    // use of selector based on the id
    const fName: Locator = await page.locator('#txt1');
    const password: Locator = await page.locator('#txt2');
    await fName.fill('Fahim');
    await password.fill('Fahim@123');

    const logo:Locator = await page.locator('.logo');
    const item = await logo.isEnabled();
    console.log(item);
    const contact:Locator = await page.locator('.txtContact');
    await contact.fill("888888888");

    //use of text selector
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);

    // use of css property and tag name
    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("SIPCOT IT PARK, Chennai");

    const pincode:Locator = await page.locator("css=input#txtpincode");
    await pincode.fill("600001");

    // use of Xpath
    const email:Locator = await page.locator('xpath=//input[@name="myemail" and @type="email"]');
    await email.fill("admin@gmail.com");

    const checkbox:Locator = await page.locator('xpath=//input[@name="term" and @type="checkbox"]');
    const checkExit = await checkbox.isEnabled();
    console.log(checkExit);



});