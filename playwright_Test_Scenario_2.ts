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
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click()
  const slider = await page.locator('#slider3').getByRole('slider')
  const target = '95'
  let iscompleated = false
  let movepercent = 0

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
  try {
    let value = await page.locator('//output[@id="rangeSuccess"]').textContent()
    expect(value).toEqual(target)
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Test scenario 2 passed' } })}`)
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