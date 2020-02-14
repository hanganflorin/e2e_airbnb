import HomePage from '../pages/homePage'
import SearchPage from '../pages/searchPage'

describe('Homepage', () => {
    it('should open home page', () => {
        HomePage.open();
        HomePage.waitForHomePage();
    });

    it('should select the filters and then search', () => {
        //select location
        HomePage.enterInputElement(HomePage.getSelectors().eLocationInput, 'Rome, Italy');
        HomePage.clickElement(HomePage.getSelectors().eLocationFirstSuggestion);

        //select date
        HomePage.clickElement(HomePage.getSelectors().eCheckInInput);
        HomePage.selectDateFromCalendar(7);

        HomePage.clickElement(HomePage.getSelectors().eCheckOutInput);
        HomePage.selectDateFromCalendar(14);

        //select guests
        HomePage.clickElement(HomePage.getSelectors().eGuestsBtn);
        HomePage.clickElement(HomePage.getSelectors().eAdultsPlusBtn);
        HomePage.clickElement(HomePage.getSelectors().eAdultsPlusBtn);
        HomePage.clickElement(HomePage.getSelectors().eChildrenPlusBtn);
        HomePage.clickElement(HomePage.getSelectors().eGuestsSaveBtn);

        //search
        HomePage.clickElement(HomePage.getSelectors().eSearchBtn);
    });

    it('should verify that the applied filters are correct', () => {
        SearchPage.waitForSearchPage();

        SearchPage.verifyText(SearchPage.getSelectors().eSearchInput.getValue(), 'Metropolitan City of Rome · Stays');
        SearchPage.verifyText(SearchPage.getSelectors().eDateFilterSpan.getText(), SearchPage.expectedDateFilterText(7, 14));
        SearchPage.verifyText(SearchPage.getSelectors().eGuestsFilterSpan.getText(), '3 guests');

    });
});