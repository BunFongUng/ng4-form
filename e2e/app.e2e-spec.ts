import { Ng4FormPage } from './app.po';

describe('ng4-form App', () => {
  let page: Ng4FormPage;

  beforeEach(() => {
    page = new Ng4FormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
