import Page from './page';
import Selectors from '../selectors/homePage';

class HomePage extends Page {
    getSelectors() {
        return Selectors;
    }

    open() {
        browser.url(browser.config.appURL);
    }

    waitForHomePage() {
        this.getSelectors().eFormSearch.waitForDisplayed();
    }

    selectDateFromCalendar(offset = 7) {
        this.getSelectors().eCalendar.waitForDisplayed();

        const currentDate = new Date();
        const offsetDate = new Date();
        offsetDate.setDate(currentDate.getDate() + offset);

        const monthDiff = offsetDate.getMonth() - currentDate.getMonth();
        for (let i = 0; i < monthDiff; i++) {
            this.clickElement(this.getSelectors().eCalendarNextMonth);
        }

        // wait for month to transition
        // nice implementation: use waitUntil
        browser.pause(100);

        this.selectDayFromCalendar(offsetDate.getDate());
    }

    selectDayFromCalendar(day) {
        const eCalendarDay = $(`${this.getSelectors().sCalendarDay}[text()="${day}"]`);
        this.clickElement(eCalendarDay);
    }
}
export default new HomePage();
