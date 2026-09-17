import { Page } from "@playwright/test";

export class TotalPricesCheckout {
    constructor (private page: Page) {};

    async calSumTotal() {
        const priceTexts = await this.page.getByTestId('inventory-item-price').allTextContents();

        const prices = priceTexts.map((text) => parseFloat(text.replace('$', '')))

        return prices.reduce((sum, price) => sum + price, 0);
    }

    async itemTotal() {
        const totalText = await this.page.getByTestId('subtotal-label').textContent();   
        return  parseFloat((totalText ?? '').replace('Item total: $', ''));
    }
}