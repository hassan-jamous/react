describe('Protractor Demo App', function() {
    it('should have a title', async () => {
      browser.waitForAngularEnabled(false);
      await browser.get('./');
      expect(await browser.getTitle()).toEqual('Super Calculator');
    });
  });