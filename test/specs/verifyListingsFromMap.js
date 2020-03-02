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
        SearchPage.getSelectors().eMap.waitForDisplayed();

        // hover on first listing
        SearchPage.getSelectors().eFirstListing.moveTo();

        //iterate through the listings from the map and search for a listing with a black background
        let eFoundListing = null;

        SearchPage.getSelectors().eListingsFromMap.map(eListing => {
            //get the color of the background
            //ugly. new method could be created in the page class
            const eBackgroundDiv = $(`(${eListing.selector})[${eListing.index+1}]/div/div`);
            const color = eBackgroundDiv.getCSSProperty('color').value;

            if ( color === "rgba(255,255,255,1)" ) {
                if (eFoundListing)
                    throw new Error("A listing with a black background was found before!");
                eFoundListing = eListing;
            }
        });

        if (!eFoundListing)
            throw new Error("No listing was found with a background color!");

        // go to the details page of that listing
        SearchPage.clickElement(eFoundListing);

        SearchPage.clickElement(SearchPage.getSelectors().eDetailsPopupFromMap);

        browser.pause(10000);

    });

});
