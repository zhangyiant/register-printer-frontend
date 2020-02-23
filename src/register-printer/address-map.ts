export class AddressMap {
  blockType: string;
  blockInstance: string;
  baseAddress: number;
  blockSize: number;

  constructor(blockType: string,
              blockInstance: string,
              baseAddress: number,
              blockSize: number) {
    this.blockType = blockType;
    this.blockInstance = blockInstance;
    this.baseAddress = baseAddress;
    this.blockSize = blockSize;
    return;
  }

  static parseJson(jsonObj: object): AddressMap {
    const addressMap = new AddressMap(
      jsonObj["blockType"],
      jsonObj["blockInstance"],
      jsonObj["baseAddress"],
      jsonObj["blockSize"]);
    return addressMap;
  }
}
