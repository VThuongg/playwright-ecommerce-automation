import { test, expect } from '../../fixtures';

test('kiểm tra trang khi ảnh sản phẩm load lỗi', async ({page, inventoryPage}) => {
    await page.route('**/*.jpg', (route) => {
        route.fulfill({
            status: 404,
            body: ''
        })
    })

    await page.reload();

    // Tên sản phẩm và giá vẫn hiển thị bình thường dù ảnh lỗi
    await expect(page.getByTestId('inventory-item-name').first()).toBeVisible();
    await expect(page.getByTestId('inventory-item-price').first()).toBeVisible();

    // Số lượng sản phẩm vẫn đủ 6, không bị mất item nào dù ảnh lỗi
    await expect(page.getByTestId('inventory-item')).toHaveCount(6);
})