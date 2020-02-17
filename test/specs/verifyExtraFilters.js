import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';
import DetailsPage from '../pages/detailsPage';

describe('DetailPage', () => {
    it('should open home page', () => {
        HomePage.open();
        HomePage.waitForHomePage();
    });

    it('should fill in the filters and then search', () => {
        HomePage.fillInFilters();

        HomePage.clickElement(HomePage.getSelectors().eSearchBtn);
    });

    it('should open more filters popup', () => {
        SearchPage.waitForSearchPage();

        SearchPage.clickElement(SearchPage.getSelectors().eMoreFiltersBtn);

        SearchPage.getSelectors().eMoreFiltersDialog.waitForDisplayed();
    });

    it('should select 5 bedrooms and pool', () => {
        SearchPage.scrollToElement(SearchPage.getSelectors().eBedroomsPlusBtn);
        for (let i = 0; i < 5; i++) {
            SearchPage.clickElement(SearchPage.getSelectors().eBedroomsPlusBtn);
        }

        SearchPage.selectPoolFilter();

        SearchPage.clickElement(SearchPage.getSelectors().eShowStaysBtn);

        SearchPage.verifyAmenityNumberFromListings('bedrooms', 5);
    });

    it('should open details of the first property', () => {
        SearchPage.clickElement(SearchPage.getSelectors().eFirstListing);

        DetailsPage.switchToDetailsPageTab();
    });

    it('should open amenity popup and check if the pool amenity is present', () => {
        DetailsPage.scrollToElement(DetailsPage.getSelectors().eShowAllAmenities);
        DetailsPage.clickElement(DetailsPage.getSelectors().eShowAllAmenities);

        DetailsPage.getSelectors().eAmenitiesPopup.waitForDisplayed();

        DetailsPage.scrollToElement(DetailsPage.getSelectors().eFacilitiesCategory);
        DetailsPage.getSelectors().ePoolAmenity.waitForDisplayed();
    });
});
