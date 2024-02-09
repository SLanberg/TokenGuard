import { test } from '@playwright/test';

test('magic login happy path', async ({ page }) => {
	await page.goto('/');

	await page.getByLabel('telegramID').fill('6516');
	await page.getByLabel('password').fill('123');

	await page.click('button:has-text("Sign In")');
	await page.waitForTimeout(2000);

	await page.waitForURL('**/');
});
