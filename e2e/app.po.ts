export class Angular2PlayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-play-app h1')).getText();
  }
}
