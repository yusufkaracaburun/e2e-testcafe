import {ClientFunction, Selector, t} from "testcafe";

export default class BasePageObject {

// All selectors
    readonly page = {
        title: Selector('[data-testid=title-caseTitle]')
    };

    readonly message = {
        text: Selector(".sapMMessageToast")
    };

// All click functions for buttons or links

// All type functions for input fields

// All select functions for dropdowns or radiobuttons

// Other functions
    async getPageTitle() {
        return this.page.title.innerText;
    }

    async getPageUrl() {
        return ClientFunction(() => window.location.href);
    }

    async getMessage() {
        return this.message.text.innerText;
    }

// Private functions

}