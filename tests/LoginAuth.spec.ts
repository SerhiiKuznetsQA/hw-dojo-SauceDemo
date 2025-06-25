import { test } from "../pages/fixture/fixture";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { getAuthData } from "../utils";
import { LoginPage } from "../pages/LoginPage";

test.use({ userLogin: "error_user" });

test(
  "SK_3 Login register user with visual role",
  { tag: "@authToken" },
  async ({ page, userLogin }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillLoginInput(userLogin);
    await loginPage.pressSingUpBtn();
    expect(page.url()).toContain("/inventory.html");
  }
);
