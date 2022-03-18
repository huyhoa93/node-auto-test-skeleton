const config = require('../config.js')
const { By } = require('selenium-webdriver')
const helper = require('../helper/helper')
let driver = null
// process.env.
const LINK = {
  WEB_URL: ''
}
const dropEle = 'a[id="dropdownMenu1"]'
const LangVIEle = 'a[id="vi"]'
const emailEle = 'input[type="email"]'
const passEle = 'input[type="password"]'

describe('Auto Human-kanri', async () => {

  before(async () => {
    driver = config.getDriver()
  })

  after(() => {
    // driver.quit()
  })

  describe('360 test', function() {
    it('Go to page', async () => {
      await driver.get(LINK.WEB_URL)

      const drop = await driver.findElement(By.css(dropEle))
      await drop.click()

      await helper.sleep(2000)

      const langVI = await driver.findElement(By.css(LangVIEle))
      await langVI.click()

      await helper.sleep(3000)

      const btnAuthen = await driver.findElement(By.className('btn-green'))
      await btnAuthen.click()

      await helper.sleep(5000)

      const emailInput = await driver.findElement(By.css(emailEle))
      await helper.sleep(1000)
      await emailInput.clear()
      await helper.sleep(1000)
      await emailInput.sendKeys('')
      await helper.sleep(1000)

      const nextBtn = await driver.findElement(By.className('DL0QTb'))
      await helper.sleep(1000)
      await nextBtn.click()
      await helper.sleep(3000)

      const passInput = await driver.findElement(By.css(passEle))
      await helper.sleep(1000)
      await passInput.clear()
      await helper.sleep(1000)
      await passInput.sendKeys('')
      await helper.sleep(1000)

      const nextBtn2 = await driver.findElement(By.className('DL0QTb'))
      await helper.sleep(1000)
      await nextBtn2.click()
      await helper.sleep(3000)

      const menu = await driver.findElement(By.css('a[style="color: yellow"]'))
      await menu.click()
      await helper.sleep(3000)

      const trs = await driver.findElements(By.css('tr'))
      for (let i = 9; i < trs.length; i++) {
        if (i === 40) return false
        const tds = await trs[i].findElements(By.css('td'))
        for (let j = 2; j < tds.length; j++) {
          await tds[j].click()
          await helper.sleep(1000)
          const select = await tds[j].findElement(By.css('select'))
          await select.click()
          await helper.sleep(1000)
          const option = await select.findElement(By.css('option[value="4"]'))
          await option.click()
          await helper.sleep(1000)
        }
      }
      await helper.sleep(3000)
    })
  })
})
