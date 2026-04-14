import { test, expect } from '@playwright/test';

test.describe('AI Prompt Packs homepage', () => {
  test('page loads with headline visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/prompt|wasting|ai/i);
  });

  test('email form is present', async ({ page }) => {
    await page.goto('/');
    const emailInput = page.locator('input[type="email"], input[placeholder*="email" i]').first();
    await expect(emailInput).toBeVisible();
  });

  test('email form submits successfully', async ({ page }) => {
    await page.route('**/api/waitlist', (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) })
    );

    await page.goto('/');
    const emailInput = page.locator('input[type="email"], input[placeholder*="email" i]').first();
    await emailInput.fill('test@example.com');
    await page.click('button[type="submit"], input[type="submit"]');

    await expect(page.locator('text=/thank|confirmed|you\'re in|early access|check your/i')).toBeVisible({ timeout: 8_000 });
  });

  test('pricing section is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=/pricing|\$/i').first()).toBeVisible();
  });

  test('page has no 4xx internal links', async ({ page }) => {
    await page.goto('/');
    const links = await page.locator('a[href^="/"]').all();
    const hrefs = await Promise.all(links.map((l) => l.getAttribute('href')));
    for (const href of hrefs) {
      if (!href) continue;
      const res = await page.request.get(href);
      expect(res.status(), `Broken link: ${href}`).toBeLessThan(400);
    }
  });
});
