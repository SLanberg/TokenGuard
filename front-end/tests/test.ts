import { expect, test } from '@playwright/test';

// Unauthorized user
test('Home page as expected for unauthorized', async ({ page}) => {
	await page.goto('/');
	await expect(page.locator('#telegramID')).toBeVisible();
	await expect(page.locator('#password')).toBeVisible();
});

test('Sign-up page as expected for unauthorized', async ({ page}) => {
	await page.goto('/sign-up');
	await expect(page.locator('#telegramID')).toBeVisible();
	await expect(page.locator('#password')).toBeVisible();
	await expect(page.locator('#confirmPassword')).toBeVisible();
});

test('Profile summary page as expected for unauthorized', async ({ page}) => {
	await page.goto('/profile-summary');

	// Check here that user, if not authorized, will not be able to see anything
	await page.waitForURL('**/');
});

test('Menu page as expected for unauthorized', async ({ page}) => {
	await page.goto('/menu');

	// Check here that user, if not authorized, will not be able to see anything
	await page.waitForURL('**/');
});

test('Secure access page as expected for unauthorized', async ({ page}) => {
	await page.goto('/secure-access');

	// Check here that user, if not authorized, will not be able to see anything
	await page.waitForURL('**/');
});

test('Profile page as expected for unauthorized', async ({ page }) => {
	await page.goto('/profile');

	// Check here that user, if not authorized, will not be able to see anything
	await page.waitForURL('**/');
});
