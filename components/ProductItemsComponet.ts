import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";
import { ItemLocator } from "./ItemLocators";


export class ProductItemsComponents extends BaseComponent {
  

 
  locators:ItemLocator = new ItemLocator(this.page)
  productName:string

  constructor(page:Page , productName:string){
    super(page)
    this.productName = productName
  }

  async addToCartByName() {
    await this.locators.getAddToCartByName(this.productName)
      .click();
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

  async getImageItem() {
    await this.locators.getImageItem(this.productName)
      .click();
  }
}
