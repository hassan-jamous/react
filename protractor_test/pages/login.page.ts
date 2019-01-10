import { browser, by, element } from 'protractor';
import { LoginElements } from '../../src/components/presentational/Login_Stateful/LoginElements';

export class LoginPage {
  public async navigateToLoginPage() {
    await browser.get('http://localhost:3000/');
  }

  public async getBrowserTitle() {
    return await browser.getTitle().then(title => title);
  }

  public async setUserName(userName: string) {
    await element(by.id(LoginElements.userName)).clear();
    await element(by.id(LoginElements.userName)).sendKeys(userName);
  }

  public async setPassword(password: string) {
    await element(by.id(LoginElements.userName)).clear();
    await element(by.id(LoginElements.userName)).sendKeys(password);
  }

  public async clickLogin() {
    await element(by.id(LoginElements.loginButton)).click();
  }

  async getErrorMessage() {
    return element(by.id(LoginElements.errorMessage)).getText();
  }
}

