import { When, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';

When('User does something', async () => {
    await browser.get('http://localhost:3000');
});

Then('Something should happen', async () => {
    expect(await browser.getTitle()).to.equals("First app");
});

