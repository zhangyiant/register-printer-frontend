export const ACCESS_STRINGS: string[] = ['RW', 'RWP', 'RO', 'WO', 'RS', 'W1C', 'W0C', 'RC', 'WRC', 'WRS', 'WSC', 'WC', '-'];
export const USER_VISIBLE_STRINGS: string[] = ['Y', 'N'];

export class FieldTemplate {
    constructor(
        public name: string,
        public msb: number,
        public lsb: number,
        public defaultValue: number,
        public access: string,
        public description: string = '',
        public user_visible: string = 'N',
        public description_chinese: string = ''
        ) {
    }

  static parseJson(jsonObj: any): FieldTemplate {
    return new FieldTemplate(
      jsonObj.name,
      jsonObj.msb,
      jsonObj.lsb,
      jsonObj.defaultValue,
      jsonObj.access,
      jsonObj.description,
      jsonObj.user_visible,
      jsonObj.description_chinese
      );
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.name = this.name;
    jsonObj.msb = this.msb;
    jsonObj.lsb = this.lsb;
    jsonObj.defaultValue = this.defaultValue;
    jsonObj.access = this.access;
    jsonObj.description = this.description;
    jsonObj.user_visible = this.user_visible;
    jsonObj.description_chinese = this.description_chinese;
    return jsonObj;
  }
}
