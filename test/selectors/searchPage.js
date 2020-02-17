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

    get eMoreFiltersBtn() {
        return $('//button[span[contains(@aria-label, "More filters")]]');
    }

    get eMoreFiltersDialog() {
        return $('//div[@aria-label="More filters"]');
    }

    get eBedroomsPlusBtn() {
        return $('//*[contains(@aria-labelledby, "bedrooms")]//button[@aria-label="increase value"]');
    }

    get eExtraFiltersShowAllBtn() {
        return $('//div[@aria-label="Extras"]//button');
    }

    get ePoolCheckbox() {
        return $('//input[@id="filterItem-checkbox-amenities-7"]/..');
    }

    get eShowStaysBtn() {
        return $(`${this.eMoreFiltersDialog.selector}//footer//button[contains(text(), "Show")]`);
    }

    get eFirstListing() {
        return $('//div[@itemprop="itemListElement"]//a');
    }
}
export default new SearchPage();
