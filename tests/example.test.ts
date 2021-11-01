import {config} from '../utils/index'
import {Example} from "../enums";
import {exampleBO} from "../resources/business_objects/bo.index";

fixture("Name of fixture/feature")
    .page(config.getUrl())
    .httpAuth(config.getCredentials());

test("NAME OF TEST",
    async (t) => {
        const url = '';
        const pageTitle = '';
        const searchText = '';

        await exampleBO.navigate_to_page_url(url, pageTitle);
        await exampleBO.validate_page_title(pageTitle);
        await exampleBO.example_bussiness_object(searchText);
        await exampleBO.message_is_displayed(Example.message);
    })
    .meta({
        TESTSET: 'test',
        STORY: 'STORY NUMBER',
    })