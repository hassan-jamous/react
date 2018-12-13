import { When, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';

When('User does something', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000);
});

Then('Something should happen', async () => {
    expect(await browser.getTitle()).to.not.equals(null);
});

