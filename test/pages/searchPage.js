import Page from './page';
import Selectors from '../selectors/searchPage';

class SearchPage extends Page {
    getSelectors() {
        return Selectors;
    }

    waitForSearchPage() {
        this.getSelectors().eMainContainer.waitForDisplayed();
        this.getSelectors().eFilters.waitForDisplayed();
    }

    expectedDateFilterText(offsetCheckIn, offsetCheckOut) {
        // Feb 20 - 27
        // Mar 28 - Apr 10
        // todo: year not consider. ex: Mar 12, 2021 - Mar 10, 2022

        const currentDate = new Date();
        const offsetCheckInDate = new Date();
        const offsetCheckOutDate = new Date();
        offsetCheckInDate.setDate(currentDate.getDate() + offsetCheckIn);
        offsetCheckOutDate.setDate(currentDate.getDate() + offsetCheckOut);

        const monthNames = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];

        const checkInMonth = monthNames[offsetCheckInDate.getMonth()];
        const checkInDay = offsetCheckInDate.getDate();
        const checkOutMonth = offsetCheckOutDate.getMonth() - offsetCheckInDate.getMonth() > 0 ? monthNames[offsetCheckOutDate.getMonth()] : '';
        const checkOutDay = offsetCheckOutDate.getDate();

        return `${checkInMonth}${checkInDay} - ${checkOutMonth}${checkOutDay}`;
    }

    selectPoolFilter() {
        // because of some AB tests the pool checkbox is shown only if you press show more button
        if (this.getSelectors().eExtraFiltersShowAllBtn.isExisting()) {
            this.scrollToElement(this.getSelectors().eExtraFiltersShowAllBtn);
            this.clickElement(this.getSelectors().eExtraFiltersShowAllBtn);
        }
        this.scrollToElement(this.getSelectors().ePoolCheckbox);
        this.clickElement(this.getSelectors().ePoolCheckbox);
    }

    /**
     * Get the amenity number from a text.
     * Input:
     *  text: "31 guests · 12 bedroom · 2 beds · 1 private bath"
     *  amenity: the amenity to search for: "guests", "bedroom", "beds", etc
     *  Returns a integer or Nan if something went wrong.
     *  For amenity = "bedroom" it returns 12
    */
    getAmenityNumber(text, amenity) {
        // split by '·' and get element that contains the amenity
        const substring = text.split('·').find((el) => el.includes(amenity));
        if (!substring) return NaN;

        // return the first integer from the substring
        return parseInt(substring.trim().replace(/(^\d+)(.+$)/i, '$1'), 10);
    }

    verifyAmenityNumberFromListings(amenity, amenityNumber) {
        this.getSelectors().eItemList.waitForDisplayed();

        this.getSelectors().eListingsGuestsDetails.map((eListingAmenity) => {
            browser.waitUntil(() => {
                eListingAmenity.waitForDisplayed();
                return this.getAmenityNumber(eListingAmenity.getText(), amenity) >= amenityNumber;
            }, browser.config.waitforTimeout, `A listing has less than ${amenityNumber} ${amenity}!`);
        });
    }

    getAriaLabelFromFirstListing() {
        return this.getSelectors().eFirstListing.getAttribute('aria-label');
    }

    eButtonFromMapForFirstListing() {
        // find the aria-label from the first listing and then search for an element from the map with that aria-label
        return $(`${this.getSelectors().eMap.selector}//button[@aria-label="${this.getAriaLabelFromFirstListing()}"]`);
    }

    eMapBackgroundDiv() {
        // this div is used to the the color change
        return $(`${this.eButtonFromMapForFirstListing().selector}//span[text()]/..`);
    }

    eListingFromMap() {
        return $(`${this.getSelectors().sListingFromMap}[@aria-label="${this.getAriaLabelFromFirstListing()}"]`);
    }

    eListingFromMapTitle() {
        return $(`${this.eListingFromMap().selector}/..//div[@aria-live="polite"]/../div[text()]`);
    }
}
export default new SearchPage();
