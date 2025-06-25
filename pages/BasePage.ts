import { Locator, Page } from "@playwright/test";



export abstract class BasePage{
    page:Page;
    header:Header;
    footer:Footer;
    cartLink:Locator;

    constructor(page:Page){
        this.page = page
        this.header = new Header(page)
        this.cartLink = page.locator(`//*[@data-test="shopping-cart-badge"]`)
    }

    async waitforReload(){
        await this.page.waitForLoadState()
    }

    async clickToCart(){
        await this.cartLink.click()
    }
}

class Header{
    page:Page;
    menuBtn:Locator;
    menuItems: Locator;
    closeMenuBtn: Locator

    constructor(page:Page){
        this.page = page
        this.menuBtn = page.getByRole('button', {name:"Open Menu"})
        this.closeMenuBtn = page.getByRole('button',{name:"Close Menu"})
    }

    async openMenu(){
        await this.menuBtn.click()
    }

    async closeMenu(){
        await this.closeMenuBtn.click()
    }


}

class Footer {
    page:Page
    fblink:Locator;
    instaLink:Locator;
    twitLink:Locator;

    constructor(page:Page){
        this.page = page
        this.fblink = page.getByRole('link', {name:"Facebook"})
    }

    async checkFbRedirect(){
        await this.fblink.click()
    }
}