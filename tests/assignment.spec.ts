import { test, expect } from '@playwright/test';

test.describe('Assignment', () => {
    test('Test Scenario 1', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.getByRole('link', { name: 'Simple Form Demo' }).click();
        await expect(page.url()).toContain("simple-form-demo");
        const inputText: string = "Welcome to LambdaTest";
        await page.getByPlaceholder('Please enter your Message').fill(inputText);
        await page.locator('//button[@id="showInput"]').click();
        const messageText = await page.locator('[id="message"]').textContent();
        expect(messageText).toEqual(inputText);
    })

    test('Test Scenario 2', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click()
        const slider: any = await page.locator('#slider3').getByRole('slider')
        const target = '95'
        let iscompleated = false
        let movepercent: number = 0

        while (!iscompleated) {
            let sliderBoundingBox = await slider.boundingBox()
            await page.mouse.move(sliderBoundingBox.x + movepercent, sliderBoundingBox.y)
            await page.mouse.down()
            movepercent+=15
            await page.mouse.move(sliderBoundingBox.x + movepercent, sliderBoundingBox.y)
            await page.mouse.up()
            const slidervalue = await page.locator('//output[@id="rangeSuccess"]').textContent()
            if (slidervalue == target) {
                expect(slidervalue).toEqual(target)
                iscompleated = true
            }
        }
    })

    test('Test Scenario 3', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.getByRole('link', { name: 'Input Form Submit' }).click()
        const submitBtn = page.getByRole('button', { name: 'Submit' })
        await submitBtn.click()
        const nameField = await page.getByPlaceholder('Name', { exact: true })
        const validationMessage = await nameField.evaluate((element) => {
            const input = element as HTMLInputElement
            return input.validationMessage
        })
        expect(validationMessage.toLowerCase()).toContain('fill out this field')
        await nameField.fill('Kiran B')
        await page.locator('[placeholder="Email"]').fill('example@mail.com')
        await page.getByPlaceholder('Password').fill('password')
        await page.locator('[id="company"]').fill('Company name')
        await page.locator('//input[@placeholder="Website"]').fill('Website.com')
        await page.locator('[name="country"]').selectOption('United States')
        await page.getByPlaceholder('City').fill('New York')
        await page.locator('[id="inputAddress1"]').fill('199th lafayette street')
        await page.getByPlaceholder('Address 2').fill('newyork central perk')
        await page.locator('//input[@id="inputState"]').fill('newyorkcentral')
        await page.getByPlaceholder('Zip code').fill('10001')
        await submitBtn.click()
        const successMsg=await page.locator('[class="success-msg hidden"]').textContent()
        expect(successMsg).toContain('Thanks')
    })
})