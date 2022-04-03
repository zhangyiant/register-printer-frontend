import { BlockTemplate } from './block-template';

describe('BlockType', () => {
  it('should create an instance', () => {
    expect(new BlockTemplate('type1')).toBeTruthy();
  });
});
