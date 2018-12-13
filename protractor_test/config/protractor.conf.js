exports.config = {
    baseUrl: 'http://localhost:3000',
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    framework: 'jasmine',
    specs: ['../*.js'],
    onPrepare() {
        browser.ignoreSynchronization = true;
    }
};