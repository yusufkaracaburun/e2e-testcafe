import {ClientFunction, t} from "testcafe";
import BasePageObject from "../page_objects/base.po";
import {examplePO} from "../page_objects/po.index";

export default class BaseAssertions {
    protected basePo: BasePageObject;

    constructor() {
        this.basePo = new BasePageObject;
    }

    async validatePageTitle(expected: string) {
        await t.expect(examplePO.getPageTitle()).contains(expected);
    }

    async validatePageUrl(expected: string) {
        const getPageUrl = ClientFunction(() => window.location.href);
        await t.expect(await getPageUrl()).contains(expected);
    }

}