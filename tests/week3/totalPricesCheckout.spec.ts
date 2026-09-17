import { test, expect } from '../../fixtures';
import { CheckoutPage } from '../../pages/checkout-page';
import { TotalPricesCheckout } from '../../pages/totalPricesCheckout';

test('Kiểm tra tổng tiền khi đặt hàng', async({ page, cartWithThreeItem}) => {
    const totalPricesCheckout = new TotalPricesCheckout(page);
    const checkoutPage = new CheckoutPage(page);

    await expect(page.getByTestId('inventory-item')).toHaveCount(3);

    await checkoutPage.goToCheckout();

    await checkoutPage.fillInfo('HT', 'Vo', '070');

    const totalPr = await totalPricesCheckout.calSumTotal();

    expect(totalPr).toEqual(await totalPricesCheckout.itemTotal());

    await checkoutPage.finishOrder();
    
    await expect(page.getByRole('heading', {name: 'Thank you for your order!'}))

})