import { FieldTemplate } from '../field-template';

describe('FieldTemplate', () => {
  it('should create an instance', () => {
    expect(new FieldTemplate('field1', 5, 6, 7, 'RW')).toBeTruthy();
  });
});
