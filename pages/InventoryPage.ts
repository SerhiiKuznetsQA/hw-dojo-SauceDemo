import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductItemsComponents } from '../components/ProductItemsComponet';

export class InventoryPage extends BasePage {
  sortBtn: Locator;
  logoHeader: Locator;
  basketBtn!: Locator;
  productsContainer!: Locator;
  imageItemLink!: Locator;
  descriptionItemLink!: Locator;
  priceItem!: Locator;
  addToCartBtn!: Locator;
  counterBtn!: Locator;
  descriptionItem!: Locator;

  constructor(page: Page) {
    super(page);
    this.logoHeader = page.getByText('Swag Labs');
    this.sortBtn = page.locator('[data-test="product-sort-container"]');
  }

  getProductItem(productName: string) {
    return new ProductItemsComponents(this.page, productName);
  }
  async navigateToInventoryPage() {
    await this.page.goto('/inventory.html');
  }

  async getSort(params: string) {
    await this.sortBtn.selectOption(params);
  }

  async getProductsObj(index: number) {
    return this.productsContainer.nth(index);
  }

  async addToCard(index: number) {
    await this.addToCartBtn.nth(index).click();
  }
}
