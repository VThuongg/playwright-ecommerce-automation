import {test, expect} from '../../fixtures';
import { FilterName } from '../../pages/filter-name';

test('Kiểm tra sắp xếp theo tên tăng dần', async ({page, inventoryPage}) => {
    await inventoryPage.sortBy('az');

    const filterName = new FilterName(page);

    const productNames = await filterName.getAllNames();
    const nameProducts = [...productNames].sort();
    await expect(nameProducts).toEqual(productNames);
})

test('Kiểm tra sắp xếp theo tên giảm dần', async ({page, inventoryPage}) => {
    await inventoryPage.sortBy('za');

    const filterName = new FilterName(page);

    const productNames = await filterName.getAllNames();
    const nameProducts = [...productNames].sort().reverse();
    await expect(nameProducts).toEqual(productNames);
})