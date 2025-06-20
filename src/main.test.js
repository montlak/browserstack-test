const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
const { waitForElement, getElement, clickElement } = require("./components");

describe("BStack test", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  })

  test("main test", async () => {
    await driver.get("https://ubuntu.com/");

    //validate cockies modal
    await clickElement(driver, "id", "cookie-policy-button-accept");

    //validate title and logo
    await driver.wait(until.titleMatches(/Ubuntu/i), 10000);
    await waitForElement(driver, "className", "p-navigation__logo-title");

    //validate menu
    await clickElement(driver, "xpath", '//a[@href="/navigation"]');
    await waitForElement(driver, "id", "products");
    await waitForElement(driver, "id", "use-case");
    await waitForElement(driver, "id", "support");
    await waitForElement(driver, "id", "community");
    await waitForElement(driver, "id", "download-ubuntu");
    await waitForElement(driver, "id", "all-canonical");

    //valid donwload button
    await clickElement(driver, "id", "download-ubuntu");
    await clickElement(driver, "id", "download-ubuntu-desktop");
    await waitForElement(driver, "xpath", '//a[@href="/download/desktop"]');
  }, 1000000);

});