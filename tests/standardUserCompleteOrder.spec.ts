import { expect } from '@playwright/test';
import { test } from './fixture/fixture';
test.use({ userLogin: 'standard_user' });
test(
  'SK_1  basic shipping scenario login - chose product - add to cart - buy item ',
  { tag: '@e2e' },
  async ({
    page,
    userLogin,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
  }) => {
    const productName = 'Sauce Labs Backpack';
    await test.step('Login via standard user', async () => {
      await loginPage.navigateToLogin();
      await loginPage.fillLoginInput(userLogin);
      await loginPage.pressSingUpBtn();
      expect(page.url()).toContain('/inventory.html');
    });
    await test.step('User add product to the cart and match price from item with cart price', async () => {
      const item = inventoryPage.getProductItem(productName);
      await expect(inventoryPage.logoHeader).toBeVisible();
      const priceItem = await item.getItemPrice();
      await item.addToCartByName();
      await inventoryPage.clickToCart();
      expect(page.url()).toContain('/cart.html');
      const cartItem = cartPage.getProductCartItem(productName);
      const cartItemPrice = await cartItem.getItemPrice();
      expect(priceItem).toContain(cartItemPrice);
      await cartPage.clickCheckOutBtn();
    });
    await test.step('User Filled Address Form and going to second step', async () => {
      expect(page.url()).toContain('/checkout-step-one.html');
      await checkoutStepOnePage.fillForm({
        'First Name': 'SK',
        'Last Name': 'TeST_NAME',
        'Zip/Postal Code': '43-502',
      });
      await checkoutStepOnePage.clickContinueBtn();
    });
    await test.step('Success Ordering Message displaying', async () => {
      expect(page.url()).toContain('/checkout-step-two.html');
      await checkoutStepTwoPage.clickFinishBtn();
      const completeMessage = checkoutCompletePage.completeMsg;
      expect(completeMessage).toBeVisible();
    });
  }
);
