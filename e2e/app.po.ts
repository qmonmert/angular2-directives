export class Angular2DirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-directives-app h1')).getText();
  }
}
