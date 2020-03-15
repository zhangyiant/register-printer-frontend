import { Field } from './field';

export class Register {
    name: string;
    offset: number;
    fields: Field[];

    constructor(name: string, offset: number) {
        this.name = name;
        this.offset = offset;
        this.fields = [];
        return;
    }

    addField(field: Field) {
        this.fields.push(field);
        return;
    }

  toJson(): object {
    const jsonObj: object = {};
    jsonObj["name"] = this.name;
    jsonObj["offset"] = this.offset;
    jsonObj["fields"] = [];
    for (let field of this.fields) {
      const fieldJsonObj = field.toJson();
      jsonObj["fields"].push(fieldJsonObj);
    }
    return jsonObj;
  }

  static parseJson(jsonObj: object): Register {
    const register = new Register(
      jsonObj["name"],
      jsonObj["offset"]);
    const fieldsJsonObj = jsonObj["fields"];
    for (let fieldJsonObj of fieldsJsonObj) {
      const field = Field.parseJson(
        fieldJsonObj);
      register.addField(field);
    }
    return register;
  }
}
