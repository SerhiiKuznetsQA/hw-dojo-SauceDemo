import { Locator, Page } from "@playwright/test";


interface CheckOutUserData{
     "First Name" : string,
     "Last Name" : string,
     "Zip/Postal Code" : string
}

export class CheckoutStepOne{
    page:Page;
    titleCategory: Locator; 
    cancelBtn:Locator;
    continueBtn:Locator;
    errorMessage:Locator;


constructor(page:Page){
    this.page = page
    this.titleCategory = page.locator(`//*[@data-test="title"]`)
    this.cancelBtn = page.getByTestId('cancel')
    this.continueBtn = page.getByRole('button', {name: "Continue"})

}
async navigateToCheckout(){
    await this.page.goto('/checkout-step-one.html') 
}

async fillForm(data:CheckOutUserData){
    for (const key in data) {
        await this.page.getByRole('textbox', {name:key}).fill(data[key])
    }
}

async clickContinueBtn(){
    await this.continueBtn.click()
}









}