import { by, element } from 'protractor';

export class PageUtil {
  public static async fillTextBox(id: string, text: string) {
    await element(by.id(id)).clear();
    await element(by.id(id)).sendKeys(text);
  }
}

