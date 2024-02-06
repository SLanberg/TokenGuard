import { test } from '@playwright/test';

test('magic login happy path', async ({page}) => {
	await page.goto('/');

	const locatorTg = page.getByLabel('telegramID');
	await locatorTg.fill('6516');

	const locatorPass = page.getByLabel('password');
	await locatorPass.fill('123');

	await page.click('button:has-text("Sign In")');
	await page.waitForTimeout(2000);

	await page.waitForURL('**/');
})