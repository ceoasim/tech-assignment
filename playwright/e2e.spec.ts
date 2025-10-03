import { test, expect } from '@playwright/test';

test.describe('Knowledge Dashboard CRUD', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Add entry', async ({ page }) => {
    await page.getByPlaceholder('Title').fill('Test Entry');
    await page.getByPlaceholder('Description').fill('This is a test.');
    await page.getByRole('button', { name: 'Add Entry' }).click();
    await expect(page.getByText('Test Entry')).toBeVisible();
  });

  test('Delete entry', async ({ page }) => {
    await page.getByPlaceholder('Title').fill('Del Me');
    await page.getByPlaceholder('Description').fill('To delete.');
    await page.getByRole('button', { name: 'Add Entry' }).click();
    await page.getByText('Del Me').waitFor();
    await page.getByRole('button', { name: 'Delete' }).last().click();
    await expect(page.getByText('Del Me')).not.toBeVisible();
  });
});