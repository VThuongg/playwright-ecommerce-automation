import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login-page';

test('đăng nhập thành công với tài khoản hợp lệ', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/.*inventory.html/);
})


test('đăng nhập thất bại với username sai', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard____user", "secret_sauce");

    // await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Epic sadface: Username and password do not match any user in this service');
})

test('đăng nhập thất bại khi để trống thông tin', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", "");

    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Epic sadface: Username is required');
})


test('đăng nhập thất bại với tài khoản bị khóa', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce");

    //await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Epic sadface: Sorry, this user has been locked out.');
})