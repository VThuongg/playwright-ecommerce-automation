import { test, expect } from '@playwright/test';

test('tìm kiếm và mở trang fixtures', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('fixtures');
  await page.getByRole('link', { name: 'Fixtures' }).first().click();

  await expect(page).toHaveURL(/.*fixtures/);

  await expect(page.getByRole('heading', {name: 'Fixtures', exact: true})).toBeVisible();
});