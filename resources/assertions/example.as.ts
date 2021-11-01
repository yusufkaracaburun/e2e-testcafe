import {t} from "testcafe";
import BaseAssertions from "./base.as";
import { examplePO } from "../page_objects/po.index";

class ExampleAs extends BaseAssertions {

    async validateMessage(expected: string) {
        await t.expect(examplePO.getMessage()).eql(expected);
    }

}

export default new ExampleAs();
