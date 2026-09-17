# 🎭 Playwright E-Commerce Automated Testing Framework

[![Playwright Tests](https://github.com/VThuongg/playwright-ecommerce-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/VThuongg/playwright-ecommerce-automation/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-v1.63-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-blue?logo=typescript)
![Page Object Model](https://img.shields.io/badge/Architecture-POM-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)

Dự án kiểm thử tự động toàn diện (E2E & API Testing) dành cho ứng dụng E-Commerce sử dụng **Playwright**, **TypeScript**, mẫu thiết kế **Page Object Model (POM)** và tích hợp liên tục với **GitHub Actions**.

---

## 🎯 1. Mục tiêu dự án (Objectives)

- Xây dựng framework tự động hóa kiểm thử web e-commerce chuẩn doanh nghiệp, dễ mở rộng và bảo trì.
- Đảm bảo chất lượng các tính năng cốt lõi: Đăng nhập, Tìm kiếm & Lọc sản phẩm, Giỏ hàng, Thanh toán đơn hàng, Giao diện (Visual) và API Backend.
- Tự động hóa quy trình chạy test trên nhiều môi trường và trình duyệt qua CI/CD Pipeline.

---

## 🧪 2. Phạm vi kiểm thử & Số lượng Test Case (Scope & Test Coverage)

Framework hiện bao gồm **20+ Automated Test Cases** phủ rộng các khía cạnh kiểm thử:

| Nhóm chức năng (Module) | Thư mục Test | Mô tả chi tiết | Số lượng Test Cases |
| :--- | :--- | :--- | :---: |
| **Authentication** | `tests/auth/` | Đăng nhập thành công, xử lý sai username/password, tài khoản bị khoá (Data-driven testing) | 4 |
| **Products & Search** | `tests/products/` | Tìm kiếm sản phẩm, lọc theo tên, lọc theo giá, xử lý không tìm thấy kết quả | 4 |
| **Cart Management** | `tests/cart/` | Thêm/Xóa sản phẩm khỏi giỏ hàng, cập nhật số lượng, sắp xếp sản phẩm | 3 |
| **Checkout & Payment** | `tests/checkout/` | Nhập thông tin người nhận, tính tổng tiền hàng & thuế, hoàn tất đặt hàng | 2 |
| **API & Network Interception** | `tests/api/` | Kiểm thử REST API (GET, POST), Mocking dữ liệu mạng (Network Abort/Route Mocking) | 3 |
| **Visual Regression** | `tests/visual/` | So sánh ảnh chụp màn hình UI (Pixel-by-pixel comparison) phát hiện lệch giao diện | 1 |
| **UI Interactions** | `tests/interactions/` | Xử lý File Upload, JavaScript Alerts/Confirm/Prompt, iFrame lồng nhau | 3 |

---

## 🏗️ 3. Cấu trúc Framework (Architecture)

Áp dụng mẫu thiết kế **Page Object Model (POM)** kết hợp với **Custom Fixtures** giúp tối ưu mã nguồn:

```text
playwright-ecommerce-automation/
├── .github/workflows/         # CI/CD Workflow cho GitHub Actions
│   └── playwright.yml
├── pages/                     # Page Object Classes (Quản lý Locator & Action)
│   ├── login-page.ts          # POM cho trang Đăng nhập
│   ├── inventory-page.ts      # POM cho danh sách sản phẩm
│   ├── cart-page.ts           # POM cho trang Giỏ hàng
│   ├── checkout-page.ts       # POM cho trang Thanh toán
│   ├── product-search-page.ts # POM cho Tìm kiếm & Lọc
│   └── filter-name.ts
├── tests/                     # Kịch bản kiểm thử tổ chức theo chức năng
│   ├── api/                   # REST API & Network Mocking Tests
│   ├── auth/                  # Authentication & Login Tests
│   ├── cart/                  # Cart & Product Sorting Tests
│   ├── checkout/              # Checkout & Order Calculation Tests
│   ├── interactions/          # Upload, iFrame, Alert Tests
│   ├── products/              # Search & Filter Tests
│   ├── visual/                # Visual Regression Tests
│   └── test-files/            # File mẫu phục vụ Upload test
├── fixtures.ts                # Custom Fixtures (Auto setup login & cart state)
├── playwright.config.ts       # Cấu hình Playwright Test Runner
└── package.json               # Quản lý dependencies & scripts
```

---

## 🚀 4. Cài đặt & Chạy Test (Execution Guide)

### Cài đặt môi trường

```bash
# 1. Clone repository
git clone https://github.com/VThuongg/playwright-ecommerce-automation.git
cd playwright-ecommerce-automation

# 2. Cài đặt npm packages
npm install

# 3. Cài đặt trình duyệt Playwright
npx playwright install --with-deps
```

### Các lệnh chạy Test

- **Chạy toàn bộ Test Suite (Headless)**:
  ```bash
  npx playwright test
  ```

- **Chạy Test với giao diện UI Mode (Khuyên dùng khi Debug)**:
  ```bash
  npx playwright test --ui
  ```

- **Chạy theo từng nhóm chức năng cụ thể**:
  ```bash
  npx playwright test tests/auth/        # Chạy nhóm Auth
  npx playwright test tests/checkout/    # Chạy nhóm Checkout
  npx playwright test tests/api/         # Chạy nhóm API
  ```

- **Chạy Test hiển thị màn hình trình duyệt (Headed mode)**:
  ```bash
  npx playwright test --headed --project=chromium
  ```

---

## 📊 5. Báo cáo kiểm thử (Allure Report & HTML Report)

Framework tích hợp **Allure Report** cung cấp giao diện báo cáo chi tiết, chuyên nghiệp bao gồm bước thực thi, thời gian chạy và ảnh chụp màn hình khi thất bại.

### Mở báo cáo Playwright HTML mặc định:
```bash
npx playwright show-report
```

### Sinh và mở Allure Report:
```bash
# Tạo dữ liệu Allure và mở Dashboard
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

![Allure Report Overview](https://raw.githubusercontent.com/allure-framework/allure2/master/docs/img/report_overview.png)
*(Hình ảnh minh họa báo cáo Allure Dashboard sau khi thực thi toàn bộ kịch bản test)*

---

## 🔄 6. CI/CD Pipeline (GitHub Actions)

Dự án tự động hóa việc thực thi test thông qua GitHub Actions:
- **Tự động kích hoạt**: Mỗi khi có `git push` hoặc `pull_request` vào nhánh `main`.
- **Môi trường**: Chạy trên máy ảo `ubuntu-latest`.
- **Artifacts**: Lưu trữ báo cáo Playwright HTML Report 30 ngày trên mỗi lần build.
- **Badge trạng thái**: Xem ngay kết quả kiểm thử tại đầu trang README này.
