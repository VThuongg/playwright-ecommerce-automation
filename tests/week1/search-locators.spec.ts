import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('locators');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');

    //     // Cách 1: kiểm tra URL đã đổi đúng
    // await expect(page).toHaveURL(/.*locators/);

    // // Cách 2: kiểm tra có tiêu đề "Locators" hiển thị trên trang
    // await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();

    // Tự thêm dòng này - assertion mà Codegen KHÔNG tự sinh ra:
    await expect(page.getByText('No results found')).toBeVisible();
});
