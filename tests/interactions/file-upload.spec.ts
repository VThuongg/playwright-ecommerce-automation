import { test, expect } from '@playwright/test';

test('upload file thành công', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');



  await page.locator('#file-upload').setInputFiles('tests/test-files/sample.txt');

  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();

});