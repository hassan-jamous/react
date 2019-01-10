
import { BeforeAll, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';
import { prepareStubbedTestData, prepareIntegrationTestData } from '../testData/testPreparation';

BeforeAll(() => {
  browser.driver
    .manage()
    .window()
    .maximize();
  setDefaultTimeout(250000);
  browser.getProcessedConfig().then(config => {
    if (config.cucumberOpts.tags === '@stubTest') {
      prepareStubbedTestData();
      console.log('stubTest');
    } else if (config.cucumberOpts.tags === '@integrationTest') {
      prepareIntegrationTestData();
      console.log('integrationTest');
    }
  });
});
