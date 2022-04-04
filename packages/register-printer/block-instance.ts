export class BlockInstance {
  blockType: string;
  name: string;
  baseAddress: number;
  blockSize: number;
  addressWidth: number;
  dataWidth: number;

  constructor(blockType: string,
              name: string,
              baseAddress: number,
              blockSize: number,
              addressWidth: number,
              dataWidth: number) {
    this.blockType = blockType;
    this.name = name;
    this.baseAddress = baseAddress;
    this.blockSize = blockSize;
    this.addressWidth = addressWidth;
    this.dataWidth = dataWidth;
    return;
  }

  toJson(): object {
    const jsonObj: any = {};
    jsonObj["blockType"] = this.blockType;
    jsonObj["name"] = this.name;
    jsonObj["baseAddress"] = this.baseAddress;
    jsonObj["blockSize"] = this.blockSize;
    jsonObj['addressWidth'] = this.addressWidth;
    jsonObj['dataWidth'] = this.dataWidth;
    return jsonObj;
  }

  static parseJson(jsonObj: any): BlockInstance {
    const blockInstance = new BlockInstance(
      jsonObj["blockType"],
      jsonObj["name"],
      jsonObj["baseAddress"],
      jsonObj["blockSize"],
      jsonObj['addressWidth'],
      jsonObj['dataWidth']);
    return blockInstance;
  }
}
