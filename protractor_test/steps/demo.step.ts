import { Before, When, Then } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.page';
import { ClickerPage } from '../pages/clicker.page';
import { TestData } from '../testData/testData';
import { LoginErrors } from '../NameThisLater/loginerrors';


let loginPage: LoginPage;
let clickerPage: ClickerPage;

Before(() => {
    loginPage = new LoginPage();
    clickerPage = new ClickerPage();
});

When('Username and password are inccorect', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.setUserName(TestData.InvalidUser.userName);
    await loginPage.setPassword(TestData.InvalidUser.passWord);
    await loginPage.clickLogin();
});

Then('should show an error', async () => {
    expect(await loginPage.getErrorMessage()).to.equals(LoginErrors.userNameAndPasswordIncorrectError);
});

When('Username and password are correct', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.setUserName(TestData.ValidSASUser.userName);
    await loginPage.setPassword(TestData.ValidSASUser.passWord);
    await loginPage.clickLogin();
});

Then('login should be succesful', async () => {
    expect(await clickerPage.isPageLoad()).to.equals(true);
});
