import {test, expect} from '@playwright/test'

test('day6-practice', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', {name: "CLI documentation"}).click();

    const page1Promise = page.waitForEvent('popup');

    await page.getByRole('link', {name: "Playwright Extension"}).click();

    const page1 = await page1Promise;

    await expect(page1).toHaveURL('https://github.com/microsoft/playwright/blob/main/packages/extension/README.md')
    await expect(page1.getByRole('heading', {name: "Playwright Chrome Extension", exact: true})).toBeVisible();

});
