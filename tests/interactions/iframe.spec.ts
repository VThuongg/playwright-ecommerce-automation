//website bị lỗi - đổi thành website khác, nên code note ở đây ko sd dc

// import { test, expect } from '@playwright/test';

// test('gõ chữ vào khung soạn thảo trong iframe', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/iframe');

//   const frame = page.frameLocator('#mce_0_ifr');  

//   await frame.locator('body').click();

//   await frame.locator('body').fill("");

//   await frame.locator('body').fill("Hello");

//   await expect(frame.locator('body')).toContainText('Hello')
// });



import { test, expect } from '@playwright/test';

test('đăng nhập SauceDemo thông qua iframe', async ({ page }) => {
    await page.goto('https://iframetester.com');
    await page.getByPlaceholder("Enter a url").fill('https://www.saucedemo.com');
    await page.getByRole('button', { name: 'Render iframe' }).click();

    const frame = page.frameLocator('#iframe-window');

    await expect(frame.getByPlaceholder('Username')).toBeVisible();
});