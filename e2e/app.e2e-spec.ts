import { GumtreeContentWidgetPage } from './app.po';

describe('gumtree-content-widget App', function() {
  let page: GumtreeContentWidgetPage;

  beforeEach(() => {
    page = new GumtreeContentWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
