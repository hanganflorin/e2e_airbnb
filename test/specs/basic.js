import HomePage from '../pages/homePage'

describe('Homepage', () => {
    it('should open home page', () => {

        HomePage.open();

        browser.pause(50000);
        // browser.url('https://webdriver.io');
        // const title = browser.getTitle();
        // assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
});