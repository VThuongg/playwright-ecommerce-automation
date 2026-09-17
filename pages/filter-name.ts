import { Page } from "@playwright/test";

export class FilterName {
    constructor (private page: Page) {};

    async getAllNames() {
        return await this.page.getByTestId('inventory-item-name').allTextContents();
    }
}