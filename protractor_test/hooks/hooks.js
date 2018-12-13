var { BeforeAll } = require('cucumber');

BeforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.driver
        .manage()
        .window()
        .maximize();
});
