import {test, expect} from '@playwright/test';

test('day2-filter', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();
    
    await expect(page).toHaveURL(/.*inventory.html/);
    
    await page.getByRole('combobox').selectOption('lohi');

    const priceTexts = await page.locator('.inventory_item_price').allTextContents();

    const prices = priceTexts.map((text) => parseFloat(text.replace('$', '')));
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

    console.log(prices)
})