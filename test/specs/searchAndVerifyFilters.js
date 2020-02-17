import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';

describe('Filters', () => {
    it('should open home page', () => {
        HomePage.open();
        HomePage.waitForHomePage();
    });

    it('should fill in the filters and then search', () => {
        HomePage.fillInFilters();

        HomePage.clickElement(HomePage.getSelectors().eSearchBtn);
    });

    it('should verify that the applied filters are correct', () => {
        SearchPage.waitForSearchPage();

        SearchPage.verifyText(SearchPage.getSelectors().eSearchInput.getValue(), 'Metropolitan City of Rome · Stays');
        SearchPage.verifyText(SearchPage.getSelectors().eDateFilterSpan.getText(), SearchPage.expectedDateFilterText(7, 14));
        SearchPage.verifyText(SearchPage.getSelectors().eGuestsFilterSpan.getText(), '3 guests');
    });

    it('should verify that all listings have at least 3 guests', () => {
        SearchPage.verifyAmenityNumberFromListings('guests', 3);
    });
});
