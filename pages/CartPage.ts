import { Locator, Page } from "@playwright/test";


export class CartPage {
    page:Page;
    titleCategory:Locator;
    checkoutBtn:Locator;
    cartItems: Locator;
    removeBtn:Locator;
    qtyInput: Locator;
    continueShopBtn:Locator;


    constructor(page:Page){
        this.titleCategory = page.locator(`[data-test="title"]`)
        this.checkoutBtn = page.getByTestId('checkout')
        this.cartItems = page.locator(`[data-test="inventory-item"]`)
        this.qtyInput = page.locator(`[data-test="item-quantity"]`)
        this.removeBtn = page.getByTestId('remove-sauce-labs-backpack')
        this.continueShopBtn = page.getByTestId('continue-shopping')

    }

    async navigateTo(){
        await this.page.goto('/cart.html')
    }




}