import {Selector, t} from "testcafe";
import BasePageObject from "./base.po";
import {selectorUtils} from "../../utils/index";

class ExamplePO extends BasePageObject {

// All selectors
    readonly component = {
        field: Selector('[data-testid=unique-id]').find('input'),
        button: Selector('[data-testid=unique-id]'),
        dropdown: Selector('[data-testid=unique-id]').find('select'),
        dropdownItem: Selector('[data-testid=unique-id]'),
        calendar: Selector('[data-testid=unique-id]'),
    };

// All click functions for buttons or links
    async clickExampleButton() {
        await t.click(this.component.button);
    }

// All type functions for input fields
    async typeInExampleField(value: string) {
        await selectorUtils.typeText(this.component.field, value);
    };

// All select functions for dropdowns or radiobuttons
    async selectDropdown(dropdownItemText: string) {
        await t.click(this.component.dropdown)
            .click(this.component.dropdownItem.withText(dropdownItemText))
            .expect(this.getValueDropdown()).eql(dropdownItemText)
    }

// Other functions
    async getValueField() {
        return this.component.field.value;
    }

    async getInnerButton() {
        return this.component.button.innerText;
    }
    async getValueDropdown() {
        return this.component.dropdown.value;
    }

    async findClickableDate(fromXDays: number = 3){
        let deliveryDate : string;
        for (let i=fromXDays; i < 10; i++) {
            const today = new Date();
            const date = ExamplePO.getDeliverydate(today, i)
            const isDateSelected = await this.isDateSelected(date)
            if (isDateSelected != 'true') {
                deliveryDate = date;
                break;
            }
        }
        return deliveryDate
    }

// Private functions
    private static getDeliverydate(date: Date, days: number) {
        date.setDate(date.getDate() + days);
        const day = date.getDay();
        if (day === 0){
            date.setDate(date.getDate() + 1);
        } else if (day === 6) {
            date.setDate(date.getDate() + 2);
        }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // @ts-ignore
        return result.toLocaleDateString('nl-NL', options)
    }

    private async isDateSelected(date: string) {
        const selector = this.component.calendar.find("div").withAttribute("aria-label", date)
        return await selector.getAttribute('aria-disabled')
    }

}

export default new ExamplePO();
