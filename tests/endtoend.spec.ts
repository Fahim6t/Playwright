import {test} from '@playwright/test';
import { LoginPage } from './logintask';
import {users} from './credential';
 

for(let user of users){
    test(`${user.testCaseMsg}`,async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
    })
}
 
 