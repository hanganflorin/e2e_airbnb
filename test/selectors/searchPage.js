class SearchPage {
    get eMainContainer() {
        return $('//div[@id="ExploreLayoutController"]');
    }

    get eSearchInput() {
        return $('//input[@aria-label="Search"]');
    }

    get eFilters() {
        return $('//div[@id="filter-menu-chip-group"]');
    }

    get eDateFilterSpan() {
        return $(`${this.eFilters.selector}//div[@id="menuItemButton-date_picker"]//span[text()]`);
    }

    get eGuestsFilterSpan() {
        return $(`${this.eFilters.selector}//div[@id="menuItemButton-guest_picker"]//span[text()]`);
    }

    get eItemList() {
        return $('//div[@itemprop="itemList"]');
    }

    get eListingsGuestsDetails() {
        return $$('//div[@itemprop="itemListElement"]//div[contains(text(), "guests")]');
    }
}
export default new SearchPage();
