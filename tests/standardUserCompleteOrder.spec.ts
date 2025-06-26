import { test } from "../pages/fixture/fixture";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { getAuthData } from "../utils";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutStepOne } from "../pages/CheckoutStepOne";
import { CheckoutStepTwo } from "../pages/CheckoutStepTwo";
import { CheckOutComplete } from "../pages/CheckoutComplete";

test.use({ userLogin: "standard_user" });

test(
  "SK_1  basic shipping scenario login - chose product - add to cart - buy item ",
  { tag: "@e2e" },
  async ({ page, userLogin }) => {
    const productName = "Sauce Labs Backpack";
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page)
    const checkoutPageOne = new CheckoutStepOne(page)
    const checkoutPageTwo = new CheckoutStepTwo(page)
    const completeOrderPage = new CheckOutComplete (page)
    

    await test.step("navigate to Login page", async () => {
      await loginPage.navigateToLogin();
    });

    await test.step("fill Input Email using test use email also filling password data ", async () => {
      await loginPage.fillLoginInput(userLogin);
    });

    await test.step("click Sign In Button", async () => {
      await loginPage.pressSingUpBtn();
    });

    await test.step("Url should be changed after success Sign In", async () => {
      expect(page.url()).toContain("/inventory.html");
    });

    await test.step("Checked visibility of title product page ", async () => {
      await expect(inventoryPage.logoHeader).toBeVisible();
    });

    await test.step("Sort Product items from Low to Hi", async () => {
      await inventoryPage.getSort("lohi");
    });

     const item =
       await test.step("get product from items on the Inventory Page", async () => {
         return inventoryPage.getProductItem(productName);
       });
     const priceItem =
       await test.step("get product price for item from list", async () => {
         return item.getItemPrice();
       });
     await test.step("add product to cart", async () => {
       await item.addToCartByName();
     });
     await test.step("click to cart button", async () => {
       await inventoryPage.clickToCart();
     });
     await test.step("user should be on cart page ", async () => {
       expect(page.url()).toContain("/cart.html");
     });
     const cartItem =
       await test.step("get product items on the Cart Page  ", async () => {
         return cartPage.getProductCartItem(productName);
       });
     const cartItemPrice =
       await test.step("get product price from the Cart Page  ", async () => {
         return await cartItem.getItemPrice();
       });
     await test.step("Price from Inventory Page should be match with price from Cart", async () => {
       expect(priceItem).toContain(cartItemPrice);
     });
     await test.step("Navigate to the Checkout page by clicking the Checkout button", async ()=>{
        await cartPage.clickCheckOutBtn()
     })
     await test.step("user should be on the Checkout page One", async () => {
       expect(page.url()).toContain("/checkout-step-one.html");
     });

     await test.step("User filling checkout_info form" , async ()=>{
        await checkoutPageOne.fillForm({
     "First Name" : "SK",
     "Last Name" : "TeST_NAME",
     "Zip/Postal Code" : "43-502"
})
     })

     await test.step("Click the Continue button" , async ()=>{
        await checkoutPageOne.clickContinueBtn()
     })
     await test.step("user should be on the Checkout page Two", async () => {
       expect(page.url()).toContain("/checkout-step-two.html");
     });

     await test.step('click finish button' , async () =>{
       await checkoutPageTwo.clickFinishBtn()
     })

     await test.step('CLick the Finish button , Compete Message should be present' , async () => {
      const completeMessage = completeOrderPage.completeMsg
      expect(completeMessage).toBeVisible()
     })


      
    
  }
);


