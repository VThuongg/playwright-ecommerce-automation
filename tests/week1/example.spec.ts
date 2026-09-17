import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await page.getByRole('link', { name: 'CLI documentation' }).click();
  await page.getByRole('button', { name: 'Copy code to clipboard' }).nth(2).click();
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('locators');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');

  // Tự thêm dòng này - assertion mà Codegen KHÔNG tự sinh ra:
  await expect(page.getByText('No results found')).toBeVisible();
});