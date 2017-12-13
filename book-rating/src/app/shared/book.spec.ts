import { Book } from './book';

xdescribe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });
});
