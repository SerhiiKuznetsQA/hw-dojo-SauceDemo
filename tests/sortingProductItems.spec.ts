import { expect } from "@playwright/test";
import test from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
test.use({ storageState: "./.auth/user.json" });



// test('SK_2 Product item should sorted from Z to A',{tag:"@sortingZtoA"}, async({page})=>{
//     const inventoryPage = new InventoryPage(page)
//     await inventoryPage.navigateToInventoryPage()
//     await expect(inventoryPage.logoHeader).toBeVisible()
//     await inventoryPage.getSort('lohi')
//    //Дописати експект ,пройтись циклом по productsContainer та перевірити сортування за ціною (бага - не сортуе от лоу ту хай)

// })

// test('SK_3 All Products are Added to the Card', {tag:"@Added To Card"},async({page})=>{
//     const inventoryPage = new InventoryPage(page)
//     await inventoryPage.navigateToInventoryPage()
//     await expect(inventoryPage.logoHeader).toBeVisible()
//     const itemsObj = inventoryPage.productsContainer
//     const count = await itemsObj.count()
//     for (let index = 0; index < count; index++) {
//        await inventoryPage.addToCard(index)
//     }
//     const counterBtn = await inventoryPage.counterBtn.textContent()
//     console.log(counterBtn);
//     expect(count).toBe(Number(counterBtn))
// })