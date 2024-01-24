import { expect, test } from '@playwright/test';

test('Home page as expected', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('label:has-text("TelegramID")')).toBeVisible();
	await expect(page.locator('label:has-text("Password")')).toBeVisible();
});


test('Sign-up page as expected', async ({ page }) => {
	await page.goto('/sign-up');
	console.log(await page.content());

	await expect(page.locator('label:has-text("TelegramID")')).toBeVisible();
	await expect(page.locator('label:has-text("Password")')).toBeVisible();
	await expect(page.locator('label:has-text("Confirm Password")')).toBeVisible();
});


test('Profile summary page as expected', async ({ page }) => {
	await page.goto('/profile-summary');
});

test('Menu page as expected', async ({ page }) => {
	await page.goto('/menu');
});

test('Secure access page as expected', async ({ page }) => {
	await page.goto('/secure-access');
});

test('Profile page as expected', async ({ page }) => {
	await page.goto('/profile');
});
