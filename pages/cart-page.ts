import { Page } from "@playwright/test";

export class CartPage {

    constructor (private page: Page){};

    async getItemCount() {
        return this.page.getByTestId('inventory-item');
    }

    async getItemNames() {
        return this.page.getByTestId('inventory-item-name');
    }

    async removeItem(productName: String) {
        return this.page.getByTestId('inventory-item').filter({ hasText: `${productName}`}).getByRole('button', {name: 'Remove'}).click();
    }
}