import { RegisterTemplate } from './register-template';

export class BlockTemplate {

  constructor(blockType: string) {
    this.blockType = blockType;
    this.registerTemplates = [];
    return;
  }
  blockType: string;
  registerTemplates: Array<RegisterTemplate>;

  static parseJson(jsonObj: any): BlockTemplate {
    const blockTemplate = new BlockTemplate(
      jsonObj.blockType
    );

    const registersJsonObj = jsonObj.registerTemplates;
    for (const registerJsonObj of registersJsonObj) {
      const register = RegisterTemplate.parseJson(
        registerJsonObj);
      blockTemplate.addRegister(register);
    }
    return blockTemplate;
  }

  addRegister(register: RegisterTemplate) {
    this.registerTemplates.push(register);
    return;
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.blockType = this.blockType;
    jsonObj.registerTemplates = [];
    for (const register of this.registerTemplates) {
      const registerJsonObj = register.toJson();
      jsonObj.registerTemplates.push(registerJsonObj);
    }
    return jsonObj;
  }
}
