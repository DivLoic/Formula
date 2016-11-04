import { FormulaPage } from './app.po';

describe('formula App', function() {
  let page: FormulaPage;

  beforeEach(() => {
    page = new FormulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
