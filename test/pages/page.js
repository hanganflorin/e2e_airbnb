import Assert from 'assert';

export default class Page {
    open(path) {
        browser.url(path);
    }

    clickElement(selector) {
        selector.waitForDisplayed();
        selector.click();
    }

    enterInputElement(selector, input) {
        selector.waitForDisplayed();
        selector.setValue(input);
    }

    verifyText(inputText, expectedText) {
        Assert(inputText === expectedText, `Text doesn't match!\nActual text: ${inputText}\nExpected text: ${expectedText}`);
    }

    scrollToElement(selector) {
        selector.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
}
