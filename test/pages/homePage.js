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

    fillInFilters() {
        // select location
        this.enterInputElement(this.getSelectors().eLocationInput, 'Rome, Italy');
        this.clickElement(this.getSelectors().eLocationFirstSuggestion);

        // select date
        this.clickElement(this.getSelectors().eCheckInInput);
        this.selectDateFromCalendar(7);

        this.clickElement(this.getSelectors().eCheckOutInput);
        this.selectDateFromCalendar(14);

        // select guests
        this.clickElement(this.getSelectors().eGuestsBtn);
        this.clickElement(this.getSelectors().eAdultsPlusBtn);
        this.clickElement(this.getSelectors().eAdultsPlusBtn);
        this.clickElement(this.getSelectors().eChildrenPlusBtn);
        this.clickElement(this.getSelectors().eGuestsSaveBtn);
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
        browser.pause(200);

        this.selectDayFromCalendar(offsetDate.getDate());
    }

    selectDayFromCalendar(day) {
        const eCalendarDay = $(`${this.getSelectors().sCalendarDay}[text()="${day}"]`);
        eCalendarDay.waitForDisplayed();
        this.clickElement(eCalendarDay);
    }
}
export default new HomePage();