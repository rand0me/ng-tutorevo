import { NgTestPage } from './app.po';

describe('ng-test App', () => {
  let page: NgTestPage;

  beforeEach(() => {
    page = new NgTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
