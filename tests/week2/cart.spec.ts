import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login-page';
import { InventoryPage } from '../../pages/inventory-page';

test('Thêm sản phẩm vào giỏ hàng', async ({page}) => {
     const loginPage = new LoginPage(page);
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/.*inventory.html/);

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('Sauce Labs Backpack');
    
    await expect(await inventoryPage.getCartCount()).toHaveText('1');

    await inventoryPage.addToCart('Sauce Labs Bike Light');

    await expect(await inventoryPage.getCartCount()).toHaveText('2');

    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/.*cart.html/);

    await expect(page.getByTestId('inventory-item')).toHaveCount(2);

    const cartItemNames = await page.getByTestId('inventory-item-name').allTextContents();
    expect(cartItemNames).toEqual(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

});