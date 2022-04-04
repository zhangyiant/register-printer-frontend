import { TopSys } from '../top-sys';

describe('TopSys', () => {
  test('should create an instance', () => {
    const topSys: TopSys = new TopSys('TopSys1', 24, 32);
    expect(topSys).toBeTruthy();
    expect(topSys.name).toBe('TopSys1');
    expect(topSys.addressWidth).toBe(24);
    expect(topSys.dataWidth).toBe(32);
    expect(topSys.version).toBeNull();
    expect(topSys.author).toBeNull();
    expect(topSys.blockTemplates).toStrictEqual([]);
    expect(topSys.blockInstances).toStrictEqual([]);
  });
});
