import { Page } from "@playwright/test";

export abstract class BaseComponent {
    page:Page

    constructor(page:Page){
        this.page = page
    }
}