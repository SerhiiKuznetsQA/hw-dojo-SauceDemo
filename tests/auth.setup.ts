import {test , expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('SK_1 Login register user with visual role' , {tag:"@authToken"}, async ({page , context})=>{
   const loginPage = new LoginPage(page)
   const cookieFilePath = './.auth/user.json'
    await loginPage.navigateTo()
    await loginPage.fillLoginInput()
    await loginPage.pressSingUpBtn()
    expect(page.url()).toContain('/inventory.html')

    await context.storageState({path:cookieFilePath})
})
