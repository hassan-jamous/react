
import { BeforeAll } from 'cucumber';
import { browser } from 'protractor';

BeforeAll(() => {
  browser.driver
    .manage()
    .window()
    .maximize();
});