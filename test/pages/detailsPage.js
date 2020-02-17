import Page from './page';
import Selectors from '../selectors/detailsPage';

class DetailsPage extends Page {
    getSelectors() {
        return Selectors;
    }

    switchToDetailsPageTab() {
        browser.switchWindow(/\/rooms/);
    }
}
export default new DetailsPage();
