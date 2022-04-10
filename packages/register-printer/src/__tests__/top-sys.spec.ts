import { TopSys } from '../top-sys';
import { BlockInstance } from '../block-instance';
import { BlockTemplate } from '../block-template';
import { RegisterTemplate } from '../register-template';
import { FieldTemplate } from '../field-template';
import * as fs from 'fs';
import * as path from 'path';
import {ArrayTemplate} from '../array-template';


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

  test('parse json object', () => {
    const dataFileName: string = path.resolve(
      __dirname,
      'register-printer-data-1.json'
    );
    const data = fs.readFileSync(dataFileName, 'utf-8');
    const jsonObj = JSON.parse(data);
    const topSys: TopSys = TopSys.parseJson(jsonObj);

    const expectedTopSys = new TopSys('Top_Module', 12, 32);
    expectedTopSys.version = '2.1.234';
    expectedTopSys.author = 'Yi Zhang';

    let blockInstance: BlockInstance = new BlockInstance(
      'Type2',
      'Instance2',
      65536,
      16,
      24,
      64
    );
    expectedTopSys.blockInstances.push(blockInstance);
    blockInstance = new BlockInstance(
      'Type1',
      'Instance3',
      131072,
      65536,
      null,
      null
    );
    expectedTopSys.blockInstances.push(blockInstance);

    let blockTemplate: BlockTemplate = new BlockTemplate('Type2');
    let arrayTemplate;
    let register: RegisterTemplate = new RegisterTemplate('reg1', 0, 'register 1');
    let field: FieldTemplate = new FieldTemplate('Field1', 7, 1, 1, 'RW', 'Register1-Field1');
    register.addField(field);
    field = new FieldTemplate('Field2', 10, 8, 1, 'RW', 'Register1-Field2');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg2', 8, 'register 2');
    field = new FieldTemplate('Field2', 7, 1, 1, 'RW', 'Register2-Field1');
    register.addField(field);
    field = new FieldTemplate('Field3', 12, 9, 1, 'RW', 'Register2-Field3');
    register.addField(field);
    blockTemplate.addRegister(register);
    expectedTopSys.addBlockTemplate(blockTemplate);

    blockTemplate = new BlockTemplate('Type1');
    arrayTemplate = new ArrayTemplate('reg_array1', 16, 4, 16, 16, '');
    blockTemplate.addArrayTemplate(arrayTemplate);
    arrayTemplate = new ArrayTemplate('reg_array2', 4, 32, 256, 284, '');
    blockTemplate.addArrayTemplate(arrayTemplate);
    register = new RegisterTemplate('reg1', 0, 'register 1');
    field = new FieldTemplate('Field1', 7, 1, 1, 'RW', 'Register1-Field1');
    register.addField(field);
    field = new FieldTemplate('Field2', 10, 8, 1, 'RW', 'Register1-Field2');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg2', 4, 'register 2');
    field = new FieldTemplate('Field2', 7, 1, 1, 'RW', 'Register2-Field1');
    register.addField(field);
    field = new FieldTemplate('Field3', 12, 9, 1, 'RW', 'Register2-Field3');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg_a1', 16, 'register aa');
    field = new FieldTemplate('Field4', 3, 0, 1, 'RO', 'registeraa_field4');
    register.addField(field);
    field = new FieldTemplate('Field5', 14, 4, 2, 'RW', 'registeraa_field5');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg_a2', 256, 'register a2');
    field = new FieldTemplate('Field6', 10, 0, 4, 'RW', 'registera2_field6');
    register.addField(field);
    field = new FieldTemplate('Field7', 31, 11, 4, 'RW', 'registera2_field7');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg_a3', 280, 'register a3');
    field = new FieldTemplate('Field8', 11, 0, 5, 'RW', 'registera3_field8');
    register.addField(field);
    field = new FieldTemplate('Field9', 15, 12, 7, 'RW', 'registera3_field9');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('reg_a2', 288, 'register a2');
    field = new FieldTemplate('Field6', 10, 0, 5, 'RW', 'registera2_field6');
    register.addField(field);
    field = new FieldTemplate('Field7', 31, 11, 6, 'RW', 'registera2_field7');
    register.addField(field);
    blockTemplate.addRegister(register);
    register = new RegisterTemplate('regtt', 416, '');
    field = new FieldTemplate('Field9', 10, 0, 5, 'RW', 'registera2_field6');
    register.addField(field);
    blockTemplate.addRegister(register);
    expectedTopSys.addBlockTemplate(blockTemplate);

    expect(topSys).toEqual(expectedTopSys);
  });
});
