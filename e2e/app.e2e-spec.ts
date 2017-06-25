import { AngularLifecyclePage } from './app.po';

describe('angular-lifecycle App', () => {
  let page: AngularLifecyclePage;

  beforeEach(() => {
    page = new AngularLifecyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
