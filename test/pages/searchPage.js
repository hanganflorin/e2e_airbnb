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
}
export default new SearchPage();
