import Assert from 'assert';

import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';

describe('Map', () => {
    it('should open home page', () => {
        HomePage.open();
        HomePage.waitForHomePage();
    });

    it('should fill in the filters and then search', () => {
        HomePage.fillInFilters();

        HomePage.clickElement(HomePage.getSelectors().eSearchBtn);
    });

    it('should verify that the first property is displayed on the map', () => {
        SearchPage.eButtonFromMapForFirstListing().waitForDisplayed();

        const divColorBefore = SearchPage.eMapBackgroundDiv().getCSSProperty('color').value;

        // hover on first listing
        SearchPage.getSelectors().eFirstListing.moveTo();

        const divColorAfter = SearchPage.eMapBackgroundDiv().getCSSProperty('color').value;

        Assert(divColorBefore !== divColorAfter, "Div color didn't changed!");
    });

    it('should verify that the listing details match the details from the map', () => {
        // press the button from the map
        SearchPage.clickElement(SearchPage.eButtonFromMapForFirstListing());

        SearchPage.eListingFromMap().waitForDisplayed();

        SearchPage.verifyText(SearchPage.getSelectors().eFirstListingTitle.getTitle(), SearchPage.eListingFromMapTitle().getTitle());
    });
});
