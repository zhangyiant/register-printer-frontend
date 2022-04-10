import {ArrayTemplate} from './array-template';
import { RegisterTemplate } from './register-template';

export class BlockTemplate {

  constructor(blockType: string) {
    this.blockType = blockType;
    this.arrayTemplates = [];
    this.registerTemplates = [];
    return;
  }
  blockType: string;
  arrayTemplates: Array<ArrayTemplate>;
  registerTemplates: Array<RegisterTemplate>;

  static parseJson(jsonObj: any): BlockTemplate {
    const blockTemplate = new BlockTemplate(
      jsonObj.blockType
    );

    const arrayTemplatesJsonObj = jsonObj.arrayTemplates;
    for (const arrayTemplateJsonObj of arrayTemplatesJsonObj) {
      const arrayTemplate = ArrayTemplate.parseJson(
        arrayTemplateJsonObj
      );
      blockTemplate.addArrayTemplate(arrayTemplate);
    }
    const registersJsonObj = jsonObj.registerTemplates;
    for (const registerJsonObj of registersJsonObj) {
      const register = RegisterTemplate.parseJson(
        registerJsonObj);
      blockTemplate.addRegister(register);
    }
    return blockTemplate;
  }

  addArrayTemplate(arrayTemplate: ArrayTemplate) {
    this.arrayTemplates.push(arrayTemplate);
  }

  addRegister(register: RegisterTemplate) {
    this.registerTemplates.push(register);
    return;
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.blockType = this.blockType;
    jsonObj.arrayTemplates = [];
    for (const arrayTemplate of this.arrayTemplates) {
      const arrayTemplateJsonObj = arrayTemplate.toJson();
      jsonObj.arrayTemplates.push(arrayTemplateJsonObj);
    }
    jsonObj.registerTemplates = [];
    for (const register of this.registerTemplates) {
      const registerJsonObj = register.toJson();
      jsonObj.registerTemplates.push(registerJsonObj);
    }
    return jsonObj;
  }
}
