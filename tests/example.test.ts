import {config} from '../utils/index'
import {Example} from "../enums";
import {exampleBO} from "../resources/business_objects/bo.index";
import {apiUtils} from '../utils/index';

fixture("Name of fixture/feature")
    .page('https://alliander-acc-gvrn-cf-omgevingen-omgevingsapp-bff-approuter.cfapps.eu10.hana.ondemand.com/web/')
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

test('API Test', async t => {
    const url = 'https://alliander-acc-gvrn-cf-omgevingen-omgevingsapp-bff-approuter.cfapps.eu10.hana.ondemand.com/werkinstructies/cases';
    console.log('API TESTING ', url)
    const response = await apiUtils.getResponseData(url);
    console.log('RESPONSE ', url, response)

    // await t.expect(response.statusCode).eql(200);
})
    .meta({
        TESTSET: 'retest',
        STORY: 'STORY NUMBER',
    })