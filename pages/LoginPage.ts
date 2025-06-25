import { Locator,Page } from "@playwright/test";
import { getAuthData } from "../utils";


export class LoginPage {
    page:Page;
    userNameInput: Locator;
    passwordInput: Locator;
    singUpBtn: Locator;
    //Додати Локатор до Еррору

    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.getByPlaceholder('Password')
        this.singUpBtn = page.locator('[data-test="login-button"]')
    }

    async navigateToLogin(){
        await this.page.goto(`/`)
    }

    
    async fillLoginInput(){
        const authData = getAuthData()
        await this.userNameInput.fill(authData?.username)
        await this.passwordInput.fill(authData?.password)
    }
    
    async pressSingUpBtn(){
        await this.singUpBtn.click()
    }


}