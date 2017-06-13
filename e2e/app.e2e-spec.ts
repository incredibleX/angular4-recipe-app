import { RecetaPage } from './app.po';

describe('receta App', () => {
  let page: RecetaPage;

  beforeEach(() => {
    page = new RecetaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
