import { BeeldbankPage } from './app.po';

describe('beeldbank App', () => {
  let page: BeeldbankPage;

  beforeEach(() => {
    page = new BeeldbankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
