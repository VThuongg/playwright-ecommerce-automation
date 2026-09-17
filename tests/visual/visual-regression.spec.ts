import { test, expect } from '../../fixtures';

test('kiểm tra giao diện trang inventory không đổi', async ({page, inventoryPage}) => {
    test.skip(!!process.env.CI, 'Visual regression cần baseline riêng cho môi trường Linux CI');
    
    await page.waitForLoadState('networkidle'); //cái này dùng để đợi page load đầy đủ rồi mới chụp màn hình
    await expect(page).toHaveScreenshot('inventory-page.png', {
    mask: [page.locator('.inventory_item_img')],   // che các ảnh sản phẩm, không tính vào so sánh
    });
});