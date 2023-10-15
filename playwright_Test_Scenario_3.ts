const { chromium } = require('playwright')
const {expect} = require("expect");
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 11',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': 'bkiran297',
      'accessKey': 'HqWo4ik1ewOjwM5KCPgVTJzZ3WFzYCduiIn013fm8T7cnB7lSm',
      'network': true,
      'video': true,
      'console': true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '', // Optional
      'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
      'playwrightClientVersion': playwrightClientVersion
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const page = await browser.newPage()

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
  
  try {
    expect(successMsg).toContain('Thanks')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Test scenario 3 passed' } })}`)
    await teardown(page, browser)
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`)
    await teardown(page, browser)
    throw e
  }

})()

async function teardown(page, browser) {
  await page.close();
  await browser.close();
}