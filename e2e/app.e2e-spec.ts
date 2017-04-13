import { ContactosPage } from './app.po';

describe('contactos App', () => {
  let page: ContactosPage;

  beforeEach(() => {
    page = new ContactosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
