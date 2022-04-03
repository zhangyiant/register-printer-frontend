export const ACCESS_STRINGS: string[] = ['RW', 'RWP', 'RO', 'WO', 'RS', 'W1C', "W0C", 'RC', 'WRC', 'WRS', 'WSC', 'WC', '-'];

export class Field {
    constructor(
        public name: string,
        public msb: number,
        public lsb: number,
        public defaultValue: number,
        public access: string,
        public description: string = "") {
    }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj["name"] = this.name;
    jsonObj["msb"] = this.msb;
    jsonObj["lsb"] = this.lsb;
    jsonObj["defaultValue"] = this.defaultValue;
    jsonObj["access"] = this.access;
    jsonObj["description"] = this.description;
    return jsonObj;
  }

  static parseJson(jsonObj: any): Field {
    const field = new Field(
      jsonObj["name"],
      jsonObj["msb"],
      jsonObj["lsb"],
      jsonObj["defaultValue"],
      jsonObj["access"],
      jsonObj["description"]);
    return field;
  }
}
