import { Page } from "@playwright/test";

export class ProductSearch{
    constructor (private page: Page){};

    async goto() {
        await this.page.goto('https://automationexercise.com/products')
    }

    async search(keyword: string) {
        await this.page.getByRole('textbox', { name: 'Search Product' }).fill(keyword);
        await this.page.locator('#submit_search').click();
    }

    async getProductCount(){
        return await this.page.locator('.product-image-wrapper').count();
    }

    async addToCart(productName: string) {
        const product = this.page.locator('.product-image-wrapper').filter({ hasText: productName });
        await product.hover();
        await product.getByText('Add to cart').first().click();
    }
}