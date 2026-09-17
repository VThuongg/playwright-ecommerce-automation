import {test, expect} from '@playwright/test';

test('kiểm tra thông báo alert', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await expect(page.getByRole('heading', {name: 'JavaScript Alerts'})).toBeVisible();

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.getByRole('button', {name:'Click for JS Alert'}).click();

    await expect(page.locator('#result')).toBeVisible();
    await expect(page.locator('#result')).toContainText('You successfully clicked an alert');

});