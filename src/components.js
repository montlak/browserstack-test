const { By, until } = require("selenium-webdriver");

async function waitForElement(driver, by, text) {
    switch (by) {
        case "className":
            return await driver.wait(until.elementLocated(By.className(text)), 10000);
            break;
        case "id":
            return await driver.wait(until.elementLocated(By.id(text)), 10000);
            break;
        case "xpath":
            return await driver.wait(until.elementLocated(By.xpath(text)), 10000);
            break;
        default:
          return null;
      }
    
}

async function getElement(driver, by, text) {
    await waitForElement(driver, by, text);
    switch (by) {
        case "className":
            return await driver.findElement(By.className(text), 10000);
            break;
        case "id":
            return await driver.findElement(By.id(text), 10000);
            break;
        case "xpath":
            return await driver.findElement(By.xpath(text), 10000);
            break;
        default:
            return null;
      }
    
}

async function clickElement(driver, by, text) {
    const element = await getElement(driver, by, text);
    element.click();
}

module.exports = {
  waitForElement,
  getElement,
  clickElement
};