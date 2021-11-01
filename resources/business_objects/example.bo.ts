import BaseBusinessObject from "./base.bo";
import {exampleAS} from '../assertions/as.index';
import {examplePO} from '../page_objects/po.index';

class ExampleBo extends BaseBusinessObject {

    async example_bussiness_object(searchText: string) {
        await examplePO.typeInExampleField(searchText);
        await examplePO.clickExampleButton();
    }

    async validate_page_title(pageTitle: string) {
        await exampleAS.validatePageTitle(pageTitle);
    }

    async validate_page_url(pageUrl: string) {
        await exampleAS.validatePageUrl(pageUrl);
    }

}

export default new ExampleBo();
