import { Before, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage;

Before(() => {
    loginPage = new LoginPage();
  });

When('User does something', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.setUserName("userName");
});

Then('Something should happen', async () => {
    expect(await browser.getTitle()).to.equals("First app");
});

