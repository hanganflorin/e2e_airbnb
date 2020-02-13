export default class Page {
    open(path) {
        browser.url(path);
    }

    clickElement(selector) {
        selector.waitForDisplayed();
        selector.click();
    }
}