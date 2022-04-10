export const ACCESS_STRINGS: string[] = ['RW', 'RWP', 'RO', 'WO', 'RS', 'W1C', 'W0C', 'RC', 'WRC', 'WRS', 'WSC', 'WC', '-'];

export class FieldTemplate {
    constructor(
        public name: string,
        public msb: number,
        public lsb: number,
        public defaultValue: number,
        public access: string,
        public description: string = '') {
    }

  static parseJson(jsonObj: any): FieldTemplate {
    return new FieldTemplate(
      jsonObj.name,
      jsonObj.msb,
      jsonObj.lsb,
      jsonObj.defaultValue,
      jsonObj.access,
      jsonObj.description);
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.name = this.name;
    jsonObj.msb = this.msb;
    jsonObj.lsb = this.lsb;
    jsonObj.defaultValue = this.defaultValue;
    jsonObj.access = this.access;
    jsonObj.description = this.description;
    return jsonObj;
  }
}
