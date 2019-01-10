import { browser, by, element } from 'protractor';
import { ClickerElements } from '../../src/components/presentational/Clicker_Stateful/ClickerElements';

export class ClickerPage {
  public async getBrowserTitle() {
    return await browser.getTitle().then(title => title);
  }

  public async isPageLoad() {
    return element(by.id(ClickerElements.clickerTextId)).isDisplayed();
  }
}

