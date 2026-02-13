import {test} from "@playwright/test";


test("formSubmission",async({page})=>{
 
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    //await page.waitForTimeout(4000)

    const firstNameEle = page.locator("#bst_001") 
    await firstNameEle.fill("Lavanya")
    //await page.waitForTimeout(4000)

    const lastNameEle = page.locator("#bst_002") 
    await lastNameEle.fill("Rangan")
    //await page.waitForTimeout(4000)

    
    const emailAddressEle = page.locator("#bst_004") 
    await emailAddressEle.fill("lav2mails@gmail.com")
   // await page.waitForTimeout(4000)

    const phNoEle = page.locator("#bst_005") 
    await phNoEle.fill("9444431559")
    //await page.waitForTimeout(4000)
    
    const newPasswordEle = page.locator("#bst_006") 
    await newPasswordEle.fill("abc123")
    //await page.waitForTimeout(1000)

    const dropdownDayEle = page.locator("#day")
    await dropdownDayEle.selectOption({index:6})
    //await dropdownEle.selectOption( {value:7})
    //await dropdownEle.selectOption({label:7})
    //await page.waitForTimeout(1000)

    const dropdownMonthEle = page.locator("#month")
    await dropdownMonthEle.selectOption({index:10})
    
    const dropdownYearEle = page.locator("#year")
    await dropdownYearEle.selectOption({label:"1995"})
    //await page.waitForTimeout(2000)

    const radioBtnMaleEle = page.locator("#male")
    await radioBtnMaleEle.check()
    //await page.waitForTimeout(2000)
    //const dialogPromise = page.waitForEvent('dialog');

   // await page.waitForTimeout(10000)
     const signUpBtnEle = page.locator("#bst_007")
    await signUpBtnEle.click()
    
    //const dialog = await dialogPromise;
   // console.log(dialog.message());
    //dialog.accept()
   // await page.waitForTimeout(10000)



    

})
test("errorMessageFirstName",async({page})=>{
   
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    const signUpBtnEle = page.locator("#bst_007")
    await signUpBtnEle.click()


    //const message = await page.locator("//p[contains(@style,'color:red')]").innerText();
    const message = await page.locator("//p[contains(@style,'color: red')]").innerText();
    console.log("Error ----",message);
})

test("PlaceholderTest",async({page})=>{
     await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    const placeholder = await page.locator("#bst_001").getAttribute("placeholder");

    console.log("Placeholder:", placeholder);
})
