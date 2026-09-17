import {test, expect} from '../../fixtures';

test('sắp xếp sản phẩm theo giá tăng dần', async ({inventoryPage}) => {
    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.getAllPrices();
    
    const sortedPrices = [...prices].sort((a, b) => a - b)
    expect(prices).toEqual(sortedPrices);
})