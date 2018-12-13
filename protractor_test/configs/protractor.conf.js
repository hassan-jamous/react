exports.config = {
    baseUrl: 'http://localhost:3000',
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: ['../steps/*.js', '../hooks/*.js'],
        strict: true,
    },
    directConnect: true,

    specs: ['../features/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onPrepare() {
        browser.ignoreSynchronization = true;
    }
};