import { test, expect } from '@playwright/test';

test('custom assertion', async({page}) => {
    await page.goto("http://127.0.0.1:5500/Tasks/assertion.html");
    await page.pause();

    const textValue = await page.locator("#d1").textContent();
    const value = parseInt(textValue || '0');  // Corrected variable name

    await expect(value > 10).toBeTruthy();


    const message = await page.locator("#d2");
    await assertMinCharLength(message,5);

});

const assertMinCharLength = async(locator:any,minLength:number)=>{
        const text = await locator.textContent();
        await expect((text||'').length).toBeGreaterThan(minLength);
}


