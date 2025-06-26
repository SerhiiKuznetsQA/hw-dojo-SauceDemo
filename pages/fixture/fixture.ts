import { test as base, expect } from "@playwright/test";
import fs from "fs";
import { LoginPage } from "../LoginPage";

type Fixtures = {
  userLogin: string;
};

export const test = base.extend<Fixtures>({
  userLogin: undefined,

  storageState: async ({ browser, userLogin }, use) => {
    if (userLogin) {
      const storageStatePath = `./.auth/${userLogin}.json`;

      if (!fs.existsSync(storageStatePath)) {
        const page = await browser.newPage({ storageState: undefined });
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginForFixture();
        await loginPage.fillLoginInput(userLogin);
        await loginPage.pressSingUpBtn();
        expect(page.url()).toContain("/inventory.html");
        await page.context().storageState({ path: storageStatePath as string });
        await page.close();
      }
      await use(storageStatePath);
    }
  },
});
