import { expect, test } from '@playwright/test';

// Unauthorized user
test('Home page as expected for unauthorized', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#telegramID')).toBeVisible();
	await expect(page.locator('#password')).toBeVisible();
});

test('Sign-up page as expected for unauthorized', async ({ page }) => {
	await page.goto('/sign-up');
	await expect(page.locator('#telegramID')).toBeVisible();
	await expect(page.locator('#password')).toBeVisible();
	await expect(page.locator('#confirmPassword')).toBeVisible();
});

test('Profile summary page as expected for unauthorized', async ({ page }) => {
	await page.goto('/account-summary');

	await page.waitForURL('**/');
});

test('Secure access page as expected for unauthorized', async ({ page }) => {
	await page.goto('/secure-access');

	await page.waitForURL('**/');
});

test('Profile page as expected for unauthorized', async ({ page }) => {
	await page.goto('/casino');

	await page.waitForURL('**/');
});
