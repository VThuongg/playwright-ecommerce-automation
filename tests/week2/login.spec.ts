import {test, expect} from '@playwright/test'

test('đăng nhập thành công với tài khoản hợp lệ', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await  page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/.*inventory.html/);
})


test('đăng nhập thất bại với username sai', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await  page.getByRole('button', {name: 'Login'}).click();

    // await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})

test('đăng nhập thất bại khi để trống thông tin', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await  page.getByRole('button', {name: 'Login'}).click();

    // cách 1: sd getByText
    // await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();

    //cách 2: sd locator('[data-test] = "error"')
    // await expect(page.locator('[data-test="error"]')).toBeVisible();
    // await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
    
    //cách 3: sd getByTestId. Khi html sử dụng data-test = "error" thì phải cấu hình thêm playwright trong config
    await expect(page.getByTestId('error')).toBeVisible();
    await expect(page.getByTestId('error')).toContainText('Epic sadface: Username is required');
})


test('đăng nhập thất bại với tài khoản bị khóa', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await  page.getByRole('button', {name: 'Login'}).click();

    //await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
})