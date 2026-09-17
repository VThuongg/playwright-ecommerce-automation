# 🎭 Playwright Learning & Automation Testing Roadmap

Repository tổng hợp các bài tập, dự án thực hành và lộ trình học **Playwright với TypeScript** từ cơ bản đến nâng cao (Tuần 1 đến Tuần 6).

---

## 📌 Cấu trúc dự án

```text
.
├── pages/                    # Các Page Object Model (POM) tái sử dụng
│   ├── login-page.ts
│   ├── inventory-page.ts
│   ├── cart-page.ts
│   ├── checkout-page.ts
│   ├── product-search-page.ts
│   └── ...
├── tests/
│   ├── week1/                # Khởi tạo, Locators, Fixtures & Test đơn giản
│   ├── week2/                # Áp dụng mẫu thiết kế Page Object Model (POM)
│   ├── week3/                # Tương tác nâng cao: File Upload, iFrame, JS Alert, Checkout
│   ├── week4/                # Authentication & Luồng E2E Đăng nhập
│   ├── week5/                # API Testing, Network Mocking & Visual Regression Testing
│   └── week6/                # E2E Test Suite hoàn chỉnh & Tìm kiếm sản phẩm
├── .github/workflows/        # CI/CD Workflow với GitHub Actions
├── fixtures.ts               # Custom Fixtures mở rộng cho Playwright
└── playwright.config.ts      # Cấu hình chạy test Playwright
```

---

## 🛠️ Công nghệ & Công cụ

- **[Playwright](https://playwright.dev/)**: Framework kiểm thử E2E mạnh mẽ, hỗ trợ Chromium, Firefox, WebKit.
- **TypeScript**: Tăng tính chặt chẽ và bảo trì cho mã nguồn test.
- **Page Object Model (POM)**: Mẫu thiết kế phân tách logic giao diện và test case.
- **Allure Report**: Báo cáo kiểm thử trực quan, sinh kết quả chi tiết.
- **GitHub Actions**: Tự động chạy test trên máy ảo Ubuntu (CI/CD) mỗi khi push code.

---

## 🚀 Hướng dẫn cài đặt & Chạy Test

### 1. Yêu cầu hệ thống & Cài đặt
Yêu cầu Node.js v18+. Tải và cài đặt các phụ thuộc:

```bash
npm install
npx playwright install --with-deps
```

### 2. Các lệnh chạy Test

- **Chạy toàn bộ Test suite**:
  ```bash
  npx playwright test
  ```

- **Chạy Test với giao diện trực quan (UI Mode)**:
  ```bash
  npx playwright test --ui
  ```

- **Chạy bài tập theo từng tuần**:
  ```bash
  npx playwright test tests/week1/
  npx playwright test tests/week2/
  npx playwright test tests/week3/
  ```

- **Chạy file test cụ thể (hiển thị màn hình)**:
  ```bash
  npx playwright test tests/week2/login_POM.spec.ts --headed
  ```

### 3. Xem báo cáo (Reports)

- **Playwright HTML Report**:
  ```bash
  npx playwright show-report
  ```

- **Allure Report**:
  ```bash
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
  ```

---

## 🔄 Tích hợp CI/CD (GitHub Actions)

Dự án đã tích hợp tự động hóa qua `.github/workflows/playwright.yml`:
- Tự động chạy kiểm thử khi push code hoặc mở Pull Request vào nhánh `main`.
- Lưu trữ kết quả test artifact (`playwright-report`) trên GitHub để dễ dàng tải về kiểm tra khi xảy ra lỗi.
