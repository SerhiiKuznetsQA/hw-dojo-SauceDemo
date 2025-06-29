import { Locator, Page } from '@playwright/test';

export class CheckoutComplete {
  page: Page;
  completeMsg: Locator;
  backHomeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeMsg = page.locator(`//*[@data-test="complete-text"]`);
    this.backHomeBtn = page.getByRole('button', { name: 'Back Home' });
  }

  async getCompleteMsg() {
    return await this.completeMsg.textContent();
  }

  async clickBackHomeBtn() {
    await this.backHomeBtn.click();
  }
}
