import {test, expect} from '../../fixtures';
import { CartPage } from '../../pages/cart-page';

test('trang giỏ hàng hiển thị đúng sản phẩm đã thêm', async ({page, cartWithOneItem}) => {
    const cartPage = new CartPage(page);
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(await cartPage.getItemCount()).toHaveCount(1);
});

test('xóa sản phẩm trong giỏ hàng', async ({page, cartWithOneItem}) => {
    const cartPage = new CartPage(page);
    await expect(await cartPage.getItemCount()).toHaveCount(1);
    await cartPage.removeItem('Sauce Labs Backpack');
    await expect(await cartPage.getItemCount()).toHaveCount(0);
});