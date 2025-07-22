import {test} from '@playwright/test';

test("file handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5500/Tasks/assertion.html");
    await page.pause();

    //file uploading test case
    const filePath:string = "tests/sample.pdf";
    await page.setInputFiles("input[type='file']",filePath);
    await page.locator('button[type="submit"]').click();

    //test case for downloading file
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadButton')
    ]);

    //code for save file on disk
    const downloadFilePath = await download.path();
    console.log("Donwloading File Path: ",downloadFilePath);
});