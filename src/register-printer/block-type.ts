import { Register } from './register';

export class BlockType {
    name: string;
    size: number;
    addressWidth: number;
    dataWidth: number;
    registers: Array<Register>;

    constructor(name: string, size: number, addressWidth: number, dataWidth: number) {
        this.name = name;
        this.size = size;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.registers = [];
        return;
    }

    addRegister(register: Register) {
        this.registers.push(register);
        return;
    }

  static parseJson(jsonObj: object): BlockType {
    const blockType = new BlockType(
      jsonObj["name"],
      jsonObj["size"],
      jsonObj["addressWidth"],
      jsonObj["dataWidth"]);
    const registersJsonObj = jsonObj["registers"];
    for (let registerJsonObj of registersJsonObj) {
      const register = Register.parseJson(
        registerJsonObj);
      blockType.addRegister(register);
    }
    return blockType;
  }
}
