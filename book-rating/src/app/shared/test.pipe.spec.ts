import { TestPipe } from './test.pipe';

describe('TestPipe', () => {

  it('should add Test to everything', () => {
    const pipe = new TestPipe();
    expect(pipe.transform('blubb')).toBe('Test blubb');
  });
});
