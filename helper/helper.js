require('dotenv').config()
const helper = {
  // loginProcess: async (driver, username, password, baseUrl) => {
  //   await driver.get(baseUrl)
  //   const elmUserName = await driver.findElement(By.css(selUserName))
  //   await elmUserName.clear()
  //   await elmUserName.sendKeys(username)
  //   const elmPassWord = await driver.findElement(By.css(selPassWord))
  //   await elmPassWord.clear()
  //   await elmPassWord.sendKeys(password)
  //   const elmLogin =  await driver.findElement(By.css(selBtnLogin))
  //   await elmLogin.click()
  // },

  // logoutProcess: async (driver, baseUrl) => {
  //   if (!baseUrl) return await driver.get(process.env.UKNOW_URL + '/logout')

  //   return await driver.get(baseUrl + '/logout')
  // },

  /*
  * await sleep(5000) // sleep 5s to continue
  */
  sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

module.exports = helper
