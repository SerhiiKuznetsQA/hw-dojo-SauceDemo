import { test as base, expect } from '@playwright/test';
import fs from 'fs';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutStepOne } from '../../pages/CheckoutStepOne';
import { CheckoutStepTwo } from '../../pages/CheckoutStepTwo';
import { CheckoutComplete } from '../../pages/CheckoutComplete';

type Fixtures = {
  userLogin: string;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOne;
  checkoutStepTwoPage: CheckoutStepTwo;
  checkoutCompletePage: CheckoutComplete;
};

export const test = base.extend<Fixtures>({
  userLogin: undefined,

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutStepOnePage: async ({ page }, use) => {
    const checkoutStepOne = new CheckoutStepOne(page);
    await use(checkoutStepOne);
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await use(checkoutStepTwo);
  },
  checkoutCompletePage: async ({ page }, use) => {
    const checkoutComplete = new CheckoutComplete(page);
    await use(checkoutComplete);
  },

  storageState: async ({ browser, userLogin }, use) => {
    if (userLogin) {
      const storageStatePath = `./.auth/${userLogin}.json`;

      if (!fs.existsSync(storageStatePath)) {
        const page = await browser.newPage({ storageState: undefined });
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginForFixture();
        await loginPage.fillLoginInput(userLogin);
        await loginPage.pressSingUpBtn();
        expect(page.url()).toContain('/inventory.html');
        await page.context().storageState({ path: storageStatePath as string });
        await page.close();
      }
      await use(storageStatePath);
    }
  },
});
