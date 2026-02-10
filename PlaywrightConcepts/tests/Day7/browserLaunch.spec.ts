import {expect, test} from "@playwright/test";

test("My First Program", async ({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/")
    //const expectedTitle="Bspark Software Technologies || Playground"
    //await expect(page).toHaveTitle(expectedTitle)

    const actualTitle = await page.title()
    console.log(actualTitle);

    const actualURL=page.url()
    console.log(actualURL);

    await page.goBack();
    await page.waitForTimeout(3000)
    
    await page.goForward();
    await page.waitForTimeout(3000)


    await page.reload()
    await page.waitForTimeout(3000)

    const WebAutomation= page.locator(".Home_title__ANWNn").nth(1)
    await WebAutomation.click()

    await page.waitForTimeout(6000)

})





























































































































