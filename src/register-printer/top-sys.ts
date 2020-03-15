import { Block } from './block';
import { BlockType } from './block-type';
import { AddressMap } from './address-map';

export class TopSys {
    name: string;
    addressWidth: number;
    dataWidth: number;
    version: string | null;
    author: string | null;
    blockTypes: Array<BlockType>;
    addressMaps: Array<AddressMap>;

    constructor(name: string, addressWidth: number = 12, dataWidth: number = 32) {
        this.name = name;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.version = null;
        this.author = null;
        this.blockTypes = [];
        this.addressMaps = [];
        return;
    }

    addBlockType(blockType: BlockType) {
        this.blockTypes.push(blockType);
        return;
    }

  addAddressMap(addressMap: AddressMap) {
    this.addressMaps.push(addressMap);
    return;
  }

  toJson(): object {
    const jsonObj: object = {};
    jsonObj["name"] = this.name;
    jsonObj["addressWidth"] = this.addressWidth;
    jsonObj["dataWidth"] = this.dataWidth;
    jsonObj["version"] = this.version;
    jsonObj["author"] = this.author;
    jsonObj["blockTypes"] = [];
    for (let blockType of this.blockTypes) {
      const blockTypeJsonObj = blockType.toJson();
      jsonObj["blockTypes"].push(blockTypeJsonObj);
    }
    jsonObj["addressMaps"] = [];
    for (let addressMap of this.addressMaps) {
      const addressMapJsonObj = addressMap.toJson();
      jsonObj["addressMaps"].push(addressMapJsonObj);
    }
    return jsonObj;
  }

  static parseJson(jsonObj: object): TopSys {
    const topSys = new TopSys(
      jsonObj["name"],
      jsonObj["addressWidth"],
      jsonObj["dataWidth"]);
    topSys.version = jsonObj["version"];
    topSys.author = jsonObj["author"];
    const blockTypesJsonObj = jsonObj["blockTypes"];
    for (let blockTypeJsonObj of blockTypesJsonObj) {
      const blockType = BlockType.parseJson(
        blockTypeJsonObj);
      topSys.addBlockType(blockType);
    }
    const addressMapsJsonObj = jsonObj["addressMaps"];
    for (let addressMapJsonObj of addressMapsJsonObj) {
      const addressMap = AddressMap.parseJson(
        addressMapJsonObj);
      topSys.addAddressMap(addressMap);
    }
    return topSys;
  }
}
