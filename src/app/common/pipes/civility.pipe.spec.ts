import { CivilityPipe } from './civility.pipe';

describe('CivilityPipe', () => {
  it('create an instance', () => {
    const pipe = new CivilityPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be Monsieur', () => {
    const value = new CivilityPipe().transform('MR');
    expect(value).toBe('Monsieur');
  });

  it('should be Madame', () => {
    const value = new CivilityPipe().transform('MME');
    expect(value).toBe('Madame');
  });
});
