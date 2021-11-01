import {t} from "testcafe";
import {config} from '../../utils/index'
import BasePageObject from "../page_objects/base.po";
import {examplePO} from "../page_objects/po.index";
import {exampleAS} from "../assertions/as.index";

export default class BaseBusinessObject {
    readonly features = {
        caseInformatie: 'Case.View',
        peConcept: 'PEConcept.View',
        peOrder: 'PEOrder.View'
    }
    protected basePo: BasePageObject;

    constructor() {
        this.basePo = new BasePageObject;
    }

    async message_is_displayed(message: string) {
        await exampleAS.validateMessage(message);
    }

    async navigate_to_page_url(url: string, pageTitle: string) {
        const baseUrl = config.getUrl() + '/PMD.html#/';
        await t
            .navigateTo( baseUrl + url)
            .maximizeWindow()
            .expect(examplePO.getPageTitle()).contains(pageTitle);
    };

}