exports.config = {
    baseUrl: 'http://localhost:3000',
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        format: ['progress'],
        require: ['../steps/*.ts', '../hooks/*.ts'],
        strict: true,
        tags: '@stubTest'
    },
    directConnect: true,

    specs: ['../features/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onPrepare() {
        require('ts-node').register({
            project: 'protractor_test/tsconfig.e2e.json'
        });
        browser.ignoreSynchronization = true;
    }
};