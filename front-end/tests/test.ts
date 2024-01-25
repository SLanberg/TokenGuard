import { expect, test } from '@playwright/test';

test('Home page as expected', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('label:has-text("TelegramID")')).toBeVisible();
	await expect(page.locator('label:has-text("Password")')).toBeVisible();
});


test('Sign-up page as expected', async ({ page }) => {
	await page.goto('/sign-up');

	await expect(page.locator('label:has-text("TelegramID")')).toBeVisible();
	await expect(page.locator('label:has-text("Confirm Password")')).toBeVisible();
});


test('Profile summary page as expected', async ({ page }) => {
	await page.goto('/profile-summary');

	// check here that user if not authorized will not be able to see anything
});

test('Menu page as expected', async ({ page }) => {
	await page.goto('/menu');

	// check here that user if not authorized will not be able to see anything

});

test('Secure access page as expected', async ({ page }) => {
	await page.goto('/secure-access');

	// check here that user if not authorized will not be able to see anything

});

test('Profile page as expected', async ({ page }) => {
	await page.goto('/profile');

	// check here that user if not authorized will not be able to see anything
});
