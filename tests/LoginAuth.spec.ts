import test, { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { getAuthData } from "../utils";
import { LoginPage } from "../pages/LoginPage";




test('SK_1 Login register user with visual role' , {tag:"@authToken"}, async ({page})=>{
   const loginPage = new LoginPage(page)
    await loginPage.navigateToLogin()
    await loginPage.fillLoginInput()
    await loginPage.pressSingUpBtn()
    expect(page.url()).toContain('/inventory.html')
})

