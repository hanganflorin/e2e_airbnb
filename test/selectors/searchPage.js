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
}
export default new SearchPage();
