import {expect, test} from '@playwright/test'
 
//test got get request
test("Api mock test",async({page})=>{
    // console.log("simple get test")
    await page.route("api/users",(router)=>{
        router.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([{id:1,name:"Gokul"},{id:2,name:"Hemanth"}]),
       
        })
    })
 
    await page.goto("http://127.0.0.1:5500/Tasks/mockapi.html")
    const userlist=await page.locator(".user").allTextContents()
    await expect(userlist).toContain("Hemanth")
})

//based on parameter perform get request parameter can id or any
test("get request in th role basis",async({page})=>{
    await page.route("api/users?role=admin",(router)=>{
        router.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([{id:1,name:"Hemanth"}]),
       
        })
    })
 
    await page.goto("http://127.0.0.1:5500/Tasks/mockapi.html")
    const userlist=await page.locator(".user").allTextContents()
    await expect(userlist).toContain("Hemanth")
})

//to handle internal server error
test("Handle internal server error",async({page})=>{
    await page.route("api/users",(router)=>{
        router.fulfill({
            status:500,
            contentType:'application/json',
            body:"Internal Server Error"
       
        })
    })
 
    await page.goto("http://127.0.0.1:5500/Tasks/mockapi.html")
    const userlist=await page.locator(".usererror").allTextContents()
    await expect(userlist).toContain("Internal Server Error")
})
