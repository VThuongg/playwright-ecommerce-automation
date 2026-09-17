import { test, expect } from "../../fixtures";
import { CheckoutPage } from "../../pages/checkout-page";

test('Kiểm tra thanh toán đơn hàng', async ({page, cartWithOneItem}) => {
    const checkoutPage = new CheckoutPage(page);
    await expect(page).toHaveURL(/.*cart.html/);

    await checkoutPage.goToCheckout();


    await expect(page).toHaveURL(/.*checkout-step-one.html/);

    await checkoutPage.fillInfo('Thuong', 'Vo', '070');

    await expect(page).toHaveURL(/.*checkout-step-two.html/);


    await checkoutPage.finishOrder();

    await expect(page).toHaveURL(/.*checkout-complete.html/);

    await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();

})


