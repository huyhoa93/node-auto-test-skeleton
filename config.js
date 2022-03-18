require('dotenv').config()
const {Builder} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const path = chromedriver.path
const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service)
const options = new chrome.Options()
options.addArguments('disable-infobars')
options.addArguments('start-maximized')
/*options.addArguments('--no-sandbox')
options.addArguments('--disable-dev-shm-usage')*/
const config = {
  getDriver: () => {
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build()
    return driver
  },
}

module.exports = config
