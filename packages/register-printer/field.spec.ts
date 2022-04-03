import { Field } from './field';

describe('Field', () => {
  it('should create an instance', () => {
    expect(new Field('field1', 5, 6, 7, 'RW')).toBeTruthy();
  });
});
