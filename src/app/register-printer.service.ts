import { Injectable } from '@angular/core';
import {
  TopSys,
  BlockType,
  Block,
  Register,
  Field
} from '../register-printer';

@Injectable({
  providedIn: 'root'
})
export class RegisterPrinterService {

  topSys: TopSys = new TopSys('Top_Module');

  constructor() {
    this.topSys.version = '2.1.234';
    this.topSys.author = 'Peter';
    this.topSys.addressWidth = 12;
    this.topSys.dataWidth = 32;
    let blockType: BlockType;
    let register: Register;
    let field: Field;
    blockType = new BlockType('Block Type1', 65536, 12, 32);
    this.topSys.addBlockType(blockType);
    register = new Register('reg1', 0);
    field = new Field('Field1', 7, 1, 1, 'RW');
    register.addField(field);
    field = new Field('Field2', 10, 8, 1, 'RW');
    register.addField(field);
    blockType.addRegister(register);
    register = new Register('reg2', 2);
    field = new Field('Field2', 7, 1, 1, 'RW');
    register.addField(field);
    field = new Field('Field3', 12, 9, 1, 'RW');
    register.addField(field);
    blockType.addRegister(register);
    blockType = new BlockType('Block Type2', 16, 24, 64);
    this.topSys.addBlockType(blockType);
    register = new Register('reg1', 0);
    field = new Field('Field1', 7, 1, 1, 'RW');
    register.addField(field);
    field = new Field('Field2', 10, 8, 1, 'RW');
    register.addField(field);
    blockType.addRegister(register);
    register = new Register('reg2', 1);
    field = new Field('Field2', 7, 1, 1, 'RW');
    register.addField(field);
    field = new Field('Field3', 12, 9, 1, 'RW');
    register.addField(field);
    blockType.addRegister(register);
    return;
  }

  getTopSys(): TopSys {
    return this.topSys;
  }
}
