import{test as base} from '@playwright/test';
 
type MyFixture ={
    Hollywood:string
}
 
export const test = base.extend<MyFixture>({
    Hollywood: async({},use:any)=>{
        console.log("I need sleep");
        await use();
    }
});