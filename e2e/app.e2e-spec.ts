import { RogatumClientPage } from './app.po';

describe('rogatum-client App', () => {
  let page: RogatumClientPage;

  beforeEach(() => {
    page = new RogatumClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
