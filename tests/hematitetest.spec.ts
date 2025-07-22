import {test} from '@playwright/test';
import { describe } from 'node:test';


describe('Authentication',()=>{
    test.beforeEach('Hematite Login', async({page})=>{
    await page.goto("http://quiz-fe.hematitecorp.com/");
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('fahimbasha00@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Fahim@ece123');
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Sign In' }).click(); 
    //await page.close();

});
test('Hematite Quiz Voucher',async({page})=>{
    await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
    await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('ABCDEF');
    await page.getByRole('button', { name: 'submit' }).click();
    await page.getByRole('button', { name: 'submit' }).click();
    await page.pause();

    
});




});



