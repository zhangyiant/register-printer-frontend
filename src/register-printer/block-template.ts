import { Register } from './register';

export class BlockTemplate {
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

  toJson(): object {
    const jsonObj: object = {};
    jsonObj["name"] = this.name;
    jsonObj["size"] = this.size;
    jsonObj["addressWidth"] = this.addressWidth;
    jsonObj["dataWidth"] = this.dataWidth;
    jsonObj["registers"] = [];
    for (let register of this.registers) {
      const registerJsonObj = register.toJson();
      jsonObj["registers"].push(registerJsonObj);
    }
    return jsonObj;
  }

  static parseJson(jsonObj: object): BlockTemplate {
    const blockType = new BlockTemplate(
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
