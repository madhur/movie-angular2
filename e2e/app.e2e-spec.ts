import { MovieAngularPage } from './app.po';

describe('movie-angular App', () => {
  let page: MovieAngularPage;

  beforeEach(() => {
    page = new MovieAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
