import { test, expect } from '@playwright/test';
import { ProductSearch } from '../../pages/product-search-page';

test.describe('Kiểm tra tìm kiếm sản phẩm', () => {

    let productSearch: ProductSearch;

    test.beforeEach(async ({page}) => {
       
        productSearch = new ProductSearch(page)
        await productSearch.goto()
    })

    test('kiểm tra tìm kiếm theo tên sản phẩm', async ({ page }) => {

        await productSearch.search('blue top');
        expect(await productSearch.getProductCount()).toBe(1);

    });

    test('kiểm tra để trống thông tin tìm kiếm', async ({ page }) => {

        const totalProductsBeforeSearch = await productSearch.getProductCount();
        await productSearch.search('');
        expect(await productSearch.getProductCount()).toBe(totalProductsBeforeSearch);

    });

    test('kiểm tra tìm kiếm theo một phần tên sản phẩm', async ({ page }) => {

        await productSearch.search('top')

        await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
        
        const totalProducts = await productSearch.getProductCount();
        await expect(totalProducts).toBeGreaterThan(1);

    });

    test('kiểm tra tìm kiếm in hoa tên sản phẩm', async ({ page }) => {

        await productSearch.search('BLUE TOP')
        expect(await productSearch.getProductCount()).toBe(1);

    });

    test('kiểm tra tìm kiếm theo kí tự đặc biệt', async ({ page }) => {

        await productSearch.search('%%%%')
        expect(await productSearch.getProductCount()).toBe(0);

    });

    test('kiểm tra tìm kiếm thành công và thêm vào giỏ hàng', async ({ page }) => {
        
        await productSearch.search('blue top')
        expect(await productSearch.getProductCount()).toBe(1);

        await productSearch.addToCart('blue top')
        await expect(page.getByRole('heading', {name: 'Added!'})).toBeVisible();
    });
})

