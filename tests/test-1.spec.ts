import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test.use({ storageState: "./.auth/user.json" });

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html')
  const productsPage = new InventoryPage(page)
  const item = productsPage.getProductItem('Sauce Labs Backpack')
  await item.addToCartByName()
  await item.removeFromCartByName()
  const descriptionItem =await item.getDescription()
  const priceItem = await item.getItemPrice()
  await item.getImageItem()
  console.log( priceItem);
  console.log(descriptionItem);
});