export class ArrayTemplate {
  constructor(
    public name: string,
    public length: number,
    public offset: number,
    public startAddress: number,
    public endAddress: number,
    public description: string = ''
  ) {
  }

  static parseJson(jsonObj: any): ArrayTemplate {
    return new ArrayTemplate(
      jsonObj.name,
      jsonObj.length,
      jsonObj.offset,
      jsonObj.startAddress,
      jsonObj.endAddress,
      jsonObj.description
    );
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj.name = this.name;
    jsonObj.length = this.length;
    jsonObj.offset = this.offset;
    jsonObj.startAddress = this.startAddress;
    jsonObj.endAddress = this.endAddress;
    jsonObj.description = this.description;
    return jsonObj;
  }
}
