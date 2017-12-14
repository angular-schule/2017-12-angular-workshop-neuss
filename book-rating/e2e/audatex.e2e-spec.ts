import { browser, $, ExpectedConditions as ec } from 'protractor';

describe('Audatex website', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should display the important news', () => {
    browser.get('https://www.audatex.de/');
    const newsEl = $('#importantnews-details-1337');
    expect(newsEl.getText()).toContain('JAVA Version 1.9');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
