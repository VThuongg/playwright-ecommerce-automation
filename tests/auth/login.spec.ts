import { test, expect } from '../../fixtures';
import { LoginPage } from '../../pages/login-page';


test.describe('Đăng nhập SauceDemo', () => {
    let loginPage : LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test(`đăng nhập thành công`, async({page}) => {
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/.*inventory.html/);
        await expect(page.getByTestId('title')).toBeVisible();
    }); 

    const invalidLoginCases = [
        { username: 'standard____user', password: 'secret_sauce', expectedError: 'Username and password do not match' },
        { username: '', password: '', expectedError: 'Username is required' },
        { username: 'locked_out_user', password: 'secret_sauce', expectedError: 'Sorry, this user has been locked out' },
    ];

    for (const testCase of invalidLoginCases) {
        test(`đăng nhập thất bại: ${testCase.expectedError}`, async() => {
            await loginPage.login(testCase.username, testCase.password);

            const error = loginPage.getErrorMessage();
            await expect(error).toBeVisible();
            await expect(error).toContainText(testCase.expectedError);
        }); 
    }

})


