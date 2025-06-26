import { Locator, Page } from "@playwright/test";
import { CartItemsComponent } from "../components/CartITemsComponent";

export class CheckoutStepTwo {
  page: Page;
  paymentInfoValue: Locator;
  shippingInfo: Locator;
  itemTotal: Locator;
  taxTotal: Locator;
  total: Locator;
  finishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentInfoValue = page.locator(`//*[@data-test="payment-info-value"]`);
    this.shippingInfo = page.locator(`//*[@data-test="shipping-info-value"]`);
    this.itemTotal = page.locator(`//*[@data-test="subtotal-label"]`);
    this.taxTotal = page.locator(`//*[@data-test="tax-label"]`);
    this.total = page.locator(`//*[@data-test="total-label"]`);
    this.finishBtn = page.getByRole("button", { name: "Finish" });
  }

  getProductCartItem(productName: string) {
    return new CartItemsComponent(this.page, productName);
  }

  async getOrderNumber() {
    return await this.paymentInfoValue.textContent();
  }

  async getDeliveryInfo() {
    return await this.shippingInfo.textContent();
  }

  async getItemTotal() {
    return await this.itemTotal.textContent();
  }

  async getTaxAmount() {
    return await this.taxTotal.textContent();
  }

  async getTotalOrder() {
    return await this.total.textContent();
  }

  async clickFinishBtn() {
    await this.finishBtn.click();
  }
}
