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
