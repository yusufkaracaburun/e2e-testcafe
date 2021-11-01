const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: true,
    RESULT_DIR: '/reports/allure/allure-results',
    REPORT_DIR: '/reports/allure/allure-report',
    META: {
        TESTSET: 'TESTSET',
        STORY_ID: 'STORY',
        TEST_ID: 'ID',
        SEVERITY: 'SEVERITY',
        TEST_RUN: 'TEST_RUN'
    },
    STORY_LABEL: 'JIRA Story Link',
    STORY_URL: 'https://atlassian.net/browse/{{ID}}',
    TEST_LABEL: 'Test scenario',
    TEST_URL: 'https://jira/secure/Tests.jspa#/testCase/{{ID}}',
    labels: {
        screenshotLabel: 'Screenshot',
        browserLabel: 'Browser',
        userAgentLabel: 'User Agent',
        allureStartMessage: 'Allure reporter started...',
        allureClosedMessage: 'Allure reporter closed...'
    }
};
 
module.exports = DOC_ALLURE_CONFIG;