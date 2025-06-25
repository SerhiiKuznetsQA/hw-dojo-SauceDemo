import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartItemsComponent } from "../components/CartITemsComponent";


export class CartPage extends BasePage {
    // page:Page;
    cartComponent: CartItemsComponent
    titleCategory:Locator;
    checkoutBtn:Locator;
    cartItems: Locator;
    removeBtn:Locator;
    qtyInput: Locator;
    continueShopBtn:Locator;


    constructor(page:Page){
        super(page)
        this.page = page
        // this.cartComponent = new CartItemsComponent(this.page)
        this.titleCategory = page.locator(`[data-test="title"]`)
        this.checkoutBtn = page.getByTestId('checkout')
        this.cartItems = page.locator(`[data-test="inventory-item"]`)
        this.qtyInput = page.locator(`[data-test="item-quantity"]`)
        this.removeBtn = page.getByTestId('remove-sauce-labs-backpack')
        this.continueShopBtn = page.getByTestId('continue-shopping')

    }



    async clickCheckOutBtn(){
        await this.checkoutBtn.click()
    }

    async clickCancelBtn(){
        await this.continueShopBtn.click()
    }

    async clickRemoveBtn(){
        await this.removeBtn.click()
    }

  




}