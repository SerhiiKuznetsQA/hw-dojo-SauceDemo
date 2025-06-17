import { Locator, Page } from "@playwright/test";

export class InventoryPage{
    page:Page;
    sortBtn: Locator;
    logoHeader:Locator;
    basketBtn:Locator;
    productsContainer:Locator;
    imageItemLink:Locator;
    descriptionItemLink:Locator;
    priceItem:Locator;
    addToCartBtn:Locator;
    counterBtn: Locator;
    descriptionItem:Locator;


    constructor(page:Page){
        this.page = page
        this.logoHeader = page.getByText('Swag Labs')
        this.basketBtn = page.locator(`[data-test="shopping-cart-link"]`)
        this.productsContainer = page.locator(`[data-test="inventory-item"]`)
        this.sortBtn = page.locator('[data-test="product-sort-container"]')
        this.addToCartBtn = page.locator(`[class~="btn"]`)
        this.counterBtn = page.locator(`[data-test="shopping-cart-badge"]`)
        this.imageItemLink = page.locator(`[class="inventory_item_img"]>a`)
        this.descriptionItemLink = page.locator(`[class="inventory_item_label"]>a`)
        this.descriptionItem = page.locator(`[class="inventory_item_desc"]`)
        this.priceItem = page.locator(`[class="inventory_item_price"]`)
    }


    async navigateTo(){
       await this.page.goto('/inventory.html')
    }

    async getSort(params:string){
        await this.sortBtn.selectOption(params)
    }

    async navigateToCard(){
        this.basketBtn.click()
    }

    async getProductsObj(index:number){
        return this.productsContainer.nth(index)
    }

    async addToCard(index:number){
        await this.addToCartBtn.nth(index).click()
    }
}