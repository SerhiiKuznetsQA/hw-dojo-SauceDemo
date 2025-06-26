import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";
import { ItemLocator } from "./ItemLocators";





export class CartItemsComponent extends BaseComponent {
  productName:string
  locators:ItemLocator = new ItemLocator(this.page)

   constructor(page:Page , productName:string){
    super(page)
    this.productName = productName
  }



  async removeFromCartByName() {
    await this.locators.getRemoveBtntByName(this.productName)
      .click();
  }

  async getDescription() {
    return this.locators.getDescription(this.productName)
      .textContent();
  }

  async getItemPrice() {
    return this.locators.getItemPrice(this.productName)
      .textContent();
  }



}
