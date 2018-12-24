
import { BeforeAll, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';

BeforeAll(() => {
  browser.driver
    .manage()
    .window()
    .maximize();
    setDefaultTimeout(250000);
});