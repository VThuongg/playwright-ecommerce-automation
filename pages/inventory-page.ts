import { Page } from "@playwright/test";

export class InventoryPage{
    constructor (private page: Page) {}

    async sortBy(option: string) {
        await this.page.getByRole('combobox').selectOption(option);
    }

    async getAllPrices() {
        const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
        return priceTexts.map((text) => parseFloat(text.replace('$', '')));
    }

    async addToCart(productName: string) {
        await this.page.locator('.inventory_item')
                .filter({hasText: productName})
                .getByRole('button', {name: 'Add to cart'})
                .click();
    }

    async getCartCount() {
        return this.page.getByTestId('shopping-cart-badge')
    }

    async goToCart() {
        await this.page.getByTestId('shopping-cart-link').click();
    }
}