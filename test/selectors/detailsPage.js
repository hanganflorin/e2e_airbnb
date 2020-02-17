class DetailsPage {
    get eShowAllAmenities() {
        return $('//div[@data-plugin-in-point-id="AMENITIES_DEFAULT"]//*[contains(text(), "amenities")]');
    }

    get eAmenitiesPopup() {
        return $('//*[@aria-label="Amenities"]');
    }

    get eFacilitiesCategory() {
        return $(`${this.eAmenitiesPopup.selector}//*[text()="Facilities"]`);
    }

    get ePoolAmenity() {
        return $(`${this.eFacilitiesCategory.selector}/../..//div[text()="Pool"]`);
    }
}
export default new DetailsPage();
