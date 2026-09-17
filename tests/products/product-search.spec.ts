import { test, expect } from '@playwright/test';
import { ProductSearch } from '../../pages/product-search-page';

test.describe('Kiểm tra tìm kiếm sản phẩm', () => {

    let productSearch: ProductSearch;

    test.beforeEach(async ({ page }) => {
        productSearch = new ProductSearch(page);
        await productSearch.goto();
    });

    test('kiểm tra tìm kiếm theo tên sản phẩm', async ({ page }) => {
        await productSearch.search('blue top');
        await expect(productSearch.productItems).toHaveCount(1);
    });

    test('kiểm tra để trống thông tin tìm kiếm', async ({ page }) => {
        const totalProductsBeforeSearch = await productSearch.getProductCount();
        await productSearch.search('');
        await expect(productSearch.productItems).toHaveCount(totalProductsBeforeSearch);
    });

    test('kiểm tra tìm kiếm theo một phần tên sản phẩm', async ({ page }) => {
        await productSearch.search('top');
        await expect(productSearch.productItems.first()).toBeVisible();
        const totalProducts = await productSearch.getProductCount();
        expect(totalProducts).toBeGreaterThan(1);
    });

    test('kiểm tra tìm kiếm in hoa tên sản phẩm', async ({ page }) => {
        await productSearch.search('BLUE TOP');
        await expect(productSearch.productItems).toHaveCount(1);
    });

    test('kiểm tra tìm kiếm theo kí tự đặc biệt', async ({ page }) => {
        await productSearch.search('%%%%');
        await expect(productSearch.productItems).toHaveCount(0);
    });

    test('kiểm tra tìm kiếm thành công và thêm vào giỏ hàng', async ({ page }) => {
        await productSearch.search('blue top');
        await expect(productSearch.productItems).toHaveCount(1);

        await productSearch.addToCart('blue top');
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
    });
});


