import { Locator, Page } from "@playwright/test";

export class ProductSearch {
    readonly productItems: Locator;

    constructor(private page: Page) {
        this.productItems = this.page.locator('.product-image-wrapper');
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async search(keyword: string) {
        await this.page.getByRole('textbox', { name: 'Search Product' }).fill(keyword);
        await this.page.locator('#submit_search').click();
    }

    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    async addToCart(productName: string) {
        const product = this.productItems.filter({ hasText: productName });
        await product.hover();
        await product.getByText('Add to cart').first().click();
    }
}