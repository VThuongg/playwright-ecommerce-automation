import {test as base, expect} from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { InventoryPage } from './pages/inventory-page';

type MyFixtures = {
  inventoryPage: InventoryPage;
  cartWithOneItem: InventoryPage;
  cartWithThreeItem: InventoryPage;
};

export const test = base.extend<MyFixtures>({
    inventoryPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    cartWithOneItem: async({inventoryPage}, use) => {
        await inventoryPage.addToCart('Sauce Labs Backpack');
        await inventoryPage.goToCart();

        await use(inventoryPage);
    },

    cartWithThreeItem: async({inventoryPage}, use) => {
        await inventoryPage.addToCart('Sauce Labs Bike Light');
        await inventoryPage.addToCart('Sauce Labs Fleece Jacket');
        await inventoryPage.addToCart('Test.allTheThings() T-Shirt (Red)');
        
        await inventoryPage.goToCart();

        await use(inventoryPage);

    }
});

export { expect } from '@playwright/test';