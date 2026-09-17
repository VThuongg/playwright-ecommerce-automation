import {test, expect} from '../../fixtures'

test('Thêm sản phẩm vào giỏ hàng', async ({inventoryPage, page}) => {
    
    await inventoryPage.addToCart('Sauce Labs Backpack');
    
    await expect(await inventoryPage.getCartCount()).toHaveText('1');

     inventoryPage.addToCart('Sauce Labs Bike Light');

    await expect(await inventoryPage.getCartCount()).toHaveText('2');

    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/.*cart.html/);

    await expect(page.getByTestId('inventory-item')).toHaveCount(2);

    const cartItemNames = await page.getByTestId('inventory-item-name').allTextContents();
    expect(cartItemNames).toEqual(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

});