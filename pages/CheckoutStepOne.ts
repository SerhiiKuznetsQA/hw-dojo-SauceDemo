import { Locator, Page } from "@playwright/test";

export class CheckoutStepOne{
    page:Page;
    titleCategory: Locator; 
    firstNameInput: Locator;
    lastNameInput : Locator;
    zipInput:Locator;
    cancelBtn:Locator;
    continueBtn:Locator;
    errorMessage:Locator;


constructor(page:Page){
    this.titleCategory = page.locator(`[data-test="title"]`)
    this.firstNameInput = page.getByPlaceholder(`First Name`)
    this.lastNameInput = page.getByPlaceholder('Last Name')
    this.zipInput = page.getByPlaceholder('placeholder="Zip/Postal Code"')
    this.errorMessage = page.locator(`[class='error-message-container']`)
    this.cancelBtn = page.getByTestId('cancel')
    this.continueBtn = page.getByTestId('continue')

}


async navigateToCheckout(){
    await this.page.goto('')
}

}