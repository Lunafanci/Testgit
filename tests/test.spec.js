import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/my-account/');
  await expect(page.locator('#site-logo').getByRole('link', { name: 'Automation Practice Site' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username or email address *' }).click();
  await page.getByRole('textbox', { name: 'Username or email address *' }).fill('himixar196@fryshare.com');
  await page.getByRole('textbox', { name: 'Username or email address *' }).press('Tab');
  await page.locator('#password').press('CapsLock');
  await page.locator('#password').fill('H');
  await page.locator('#password').press('CapsLock');
  await page.locator('#password').fill('Homegy2024');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#site-logo').getByRole('link', { name: 'Automation Practice Site' })).toBeVisible();

  await page.getByRole('link', { name: 'Sign out' }).click();
});