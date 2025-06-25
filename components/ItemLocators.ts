import { Page } from "@playwright/test";


export class ItemLocator {
   private page:Page
    constructor(page:Page) {
        this.page = page
    }


    getProductTitleByName = (productName: string) =>
    this.page
      .getByRole("link", { name: productName })
      .locator(`xpath=ancestor::*[@data-test="inventory-item"]`);

    getAddToCartByName = (productName: string) => 
    this.getProductTitleByName(productName)
      .getByRole("button", { name: "Add to cart" })
  


  getRemoveBtntByName = (productName: string) => 
    this.getProductTitleByName(productName)
      .getByRole("button", { name: "Remove" })
  

  getDescription = (productName: string)=> 
    this.getProductTitleByName(productName)
      .locator(`[data-test="inventory-item-desc"]`)
    
  

  getItemPrice = (productName: string)=> 
    this.getProductTitleByName(productName)
      .locator(`[data-test="inventory-item-price"]`)
    
  

    getImageItem =(productName: string)  =>
    this.getProductTitleByName(productName)
      .getByRole("img", { name: productName })

   
        
   
}
