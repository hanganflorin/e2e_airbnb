class HomePage {
    get eFormSearch() {
        return $('//form[@role="search"]');
    }
    get eLocationInput() {
        return $('//input[@placeholder="Anywhere"]');
    }
    get eLocationFirstSuggestion() {
        return $('//ul[@role="listbox"]//li');
    }
    get eCheckInInput() {
        return $('//input[@id="checkin_input"]');
    }
    get eCheckOutInput() {
        return $('//input[@id="checkout_input"]');
    }
    get eGuestsBtn() {
        return $('//button[@id="lp-guestpicker"]');
    }
    get eAdultsPlusBtn() {
        return $('//*[contains(@aria-labelledby, "adults")]//*[name()="svg"][@aria-label="add"]/../..');
    }
    get eChildrenPlusBtn() {
        return $('//*[contains(@aria-labelledby, "children")]//*[name()="svg"][@aria-label="add"]/../..');
    }
    get eGuestsSaveBtn() {
        return $('//button[text()="Save"]');
    }
    get eSearchBtn() {
        return $('//button[@type="submit"]');
    }
    get eCalendar() {
        return $('//*[@aria-label="Calendar"]');
    }
    get sCalendarDay() {
        return '//*[@aria-label="Calendar"]//div[@data-visible="true"]//td';
    }
    get eCalendarNextMonth() {
        return $('//*[@aria-label="Calendar"]//div[@role="button"][contains(@aria-label, "next month")]');
    }
}
export default new HomePage();
