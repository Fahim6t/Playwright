import { expect } from "playwright/test";
import{test} from './fixturetask';
 
test("display product after login",async({loggedInPage})=>{
    await expect(loggedInPage.locator('.product_label')).toHaveText("Products");
});