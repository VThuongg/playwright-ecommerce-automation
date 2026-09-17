import {test, expect} from '../../fixtures';

test('trang giỏ hàng hiển thị đúng sản phẩm đã thêm', async ({page, cartWithOneItem}) => {
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.getByTestId('inventory-item')).toHaveCount(1);
});