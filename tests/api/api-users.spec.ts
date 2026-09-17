import { test, expect, request } from '@playwright/test';

test('hiển thị đúng khi API', async ({page, request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);

});

test('tạo user mới qua API', async ({page, request}) => {
    const response = await request.post('https://reqres.in/api/users', {data: {name: 'Thuong', job: 'QA'}});
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toEqual('Thuong');
    expect(body.job).toEqual('QA');
})