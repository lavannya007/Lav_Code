import {test} from "@playwright/test"
test("filter HR", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
await page.waitForTimeout(5000)
await page.locator("select").selectOption("HR");
await page.waitForTimeout(5000)
 const table = page.locator("//table[@id='webtable']/tbody")
const rows = table.locator("tr")

  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {

        const thirdCell = rows.nth(i).locator("td").nth(2); // index starts from 0

        const text = await thirdCell.innerText()
        if(text != "HR"){
            console.log("This is not Expected", text);
        } else {
            console.log( text);
        }
    }
    
    });

    test("filter by Email", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    await page.waitForTimeout(5000)
    await page.getByPlaceholder("Search Name or Email").fill("TAMIL@BSPARK.COM");
    await page.waitForTimeout(5000)
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")

  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {

        const thirdCell = rows.nth(i).locator("td").nth(5); // index starts from 0

        const text = await thirdCell.innerText()
        if(text != "TAMIL@BSPARK.COM"){
            console.log("This is not Expected", text);
        } else {
            console.log( text);
        }
    }
    
    });

   test("invalid email", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    await page.waitForTimeout(5000)
    await page.getByPlaceholder("Search Name or Email").fill("TAMILfghjkgf@BSPARK.COM");
    await page.waitForTimeout(5000)
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")

  const rowCount = await rows.count();
if (await table.locator("td", { hasText: "No records found" }).isVisible()) {
  console.log("No records found message is present");
    } 
 });

 test.only("sort by id", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    await page.locator("//button[@class='Webtable_buttonSort__MQ+dO']").click()
    await page.waitForTimeout(5000)


      const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")

  const rowCount = await rows.count();
let prevId=0;
  for (let i = 0; i < rowCount; i++) {

        const thirdCell = rows.nth(i).locator("td").nth(0); // index starts from 0

        const currentId = parseInt(await thirdCell.innerText())
        console.log(prevId,currentId)
        if(prevId > currentId){
            console.log("This is not Expected");
        }
        prevId=currentId;
    }
    
   });