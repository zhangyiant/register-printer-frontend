import { RegisterTemplate } from './register-template';

export class BlockTemplate {
  blockType: string;
  registers: Array<RegisterTemplate>;

  constructor(blockType: string) {
    this.blockType = blockType;
    this.registers = [];
    return;
  }

  addRegister(register: RegisterTemplate) {
    this.registers.push(register);
    return;
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj["blockType"] = this.blockType;
    jsonObj["registerTemplates"] = [];
    for (const register of this.registers) {
      const registerJsonObj = register.toJson();
      jsonObj['registerTemplates'].push(registerJsonObj);
    }
    return jsonObj;
  }

  static parseJson(jsonObj: any): BlockTemplate {
    const blockTemplate = new BlockTemplate(
      jsonObj["blockType"]
    );

    const registersJsonObj = jsonObj["registerTemplates"];
    for (const registerJsonObj of registersJsonObj) {
      const register = RegisterTemplate.parseJson(
        registerJsonObj);
      blockTemplate.addRegister(register);
    }
    return blockTemplate;
  }
}
