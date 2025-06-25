import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";
import { ItemLocator } from "./ItemLocators";





export class CartItemsComponent extends BaseComponent {

  locators:ItemLocator = new ItemLocator(this.page)


  async removeFromCartByName(productName: string) {
    await this.locators.getRemoveBtntByName(productName)
      .click();
  }

  async getDescription(productName: string) {
    return this.locators.getDescription(productName)
      .textContent();
  }

  async getItemPrice(productName: string) {
    return this.locators.getItemPrice(productName)
      .textContent();
  }



}
