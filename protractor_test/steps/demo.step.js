var { Then, When } = require('cucumber');
var chai = require('chai');
var expect = chai.expect;

When('User does something', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000);
});

Then('Something should happen', async () => {
    expect(await browser.getTitle()).equal('Super Calculator');
});

