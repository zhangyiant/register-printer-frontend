import { FieldTemplate } from './field-template';

export class RegisterTemplate {

    constructor(name: string, offset: number, description: string) {
        this.name = name;
        this.offset = offset;
        this.description = description;
        this.fieldTemplates = [];
        return;
    }
    name: string;
    offset: number;
    description: string;
    fieldTemplates: FieldTemplate[];

  static parseJson(jsonObj: any): RegisterTemplate {
    const register = new RegisterTemplate(
      jsonObj.name,
      jsonObj.offset,
      jsonObj.description);
    const fieldsJsonObj = jsonObj.fieldTemplates;
    for (const fieldJsonObj of fieldsJsonObj) {
      const field = FieldTemplate.parseJson(
        fieldJsonObj);
      register.addField(field);
    }
    return register;
  }

    addField(field: FieldTemplate) {
        this.fieldTemplates.push(field);
        return;
    }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.name = this.name;
    jsonObj.offset = this.offset;
    jsonObj.fieldTemplates = [];
    for (const field of this.fieldTemplates) {
      const fieldJsonObj = field.toJson();
      jsonObj.fieldTemplates.push(fieldJsonObj);
    }
    jsonObj.description = this.description;
    return jsonObj;
  }
}
