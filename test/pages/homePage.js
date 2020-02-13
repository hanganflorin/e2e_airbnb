import Page from 'page'

class HomePage extends Page {
    open() {
        browser.url('https://www.airbnb.com/');
    }
}
export default new HomePage();