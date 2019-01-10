import { browser, by, element } from 'protractor';
import { LoginElements } from '../../src/components/presentational/Login_Stateful/LoginElements';
import { PageUtil } from '../utils/page.util';

export class LoginPage {
  public async navigateToLoginPage() {
    await browser.get('http://localhost:3000/');
  }

  public async getBrowserTitle() {
    return await browser.getTitle().then(title => title);
  }

  public async setUserName(userName: string) {
    await PageUtil.fillTextBox(LoginElements.userName, userName);
  }

  public async setPassword(password: string) {
    await PageUtil.fillTextBox(LoginElements.password, password);
  }

  public async clickLogin() {
    await element(by.id(LoginElements.loginButton)).click();
  }

  public async getErrorMessage() {
    return element(by.id(LoginElements.errorMessage)).getText();
  }

  public async isErroMessageExist() {
    return element(by.id(LoginElements.errorMessage)).isDisplayed();
  }

  public async fillTextBox(id: string, text: string) {
    await element(by.id(id)).clear();
    await element(by.id(id)).sendKeys(text);
  }
}

