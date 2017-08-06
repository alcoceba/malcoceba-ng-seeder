import { VocabularyCheckerPage } from './app.po';

describe('vocabulary-checker App', () => {
  let page: VocabularyCheckerPage;

  beforeEach(() => {
    page = new VocabularyCheckerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
