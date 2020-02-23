export class Field {
    constructor(
        public name: string,
        public msb: number,
        public lsb: number,
        public defaultValue: number,
        public access: string,
        public description: string = "") {
    }

  static parseJson(jsonObj: object): Field {
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
