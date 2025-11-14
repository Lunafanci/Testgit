

const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {
  // 1️⃣ Mở trang login
  await page.goto('https://practice.automationtesting.in/my-account/');

  // 2️⃣ Điền email vào trường Email
  await page.fill('#username', 'himixar196@fryshare.com');

  // 3️⃣ Điền mật khẩu vào trường Password
  await page.fill('#password', 'Homegy2024');

   // 3️⃣ Bấm nút Login
  await page.click('input[name="login"]');


  // ✅ Kiểm tra có link Logout => login thành công
  const logoutLink = page.locator('a:has-text("Sign out")');
  await expect(logoutLink).toBeVisible({ timeout: 10000 });
});


