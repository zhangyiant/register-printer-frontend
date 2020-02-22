import { Block } from './block';
import { BlockType } from './block-type';

export class TopSys {
    name: string;
    addressWidth: number;
    dataWidth: number;
    version: string | null;
    author: string | null;
    blockTypes: Array<BlockType>;
    addressMap: Array<string>;

    constructor(name: string, addressWidth: number = 12, dataWidth: number = 32) {
        this.name = name;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.version = null;
        this.author = null;
        this.blockTypes = [];
        this.addressMap = [];
        return;
    }

    addBlockType(blockType: BlockType) {
        this.blockTypes.push(blockType);
        return;
    }

  static parseJson(jsonObj: object): TopSys {
    const topSys = new TopSys(
      jsonObj["name"],
      jsonObj["addressWidth"],
      jsonObj["dataWidth"]);
    topSys.version = jsonObj["version"];
    topSys.author = jsonObj["author"];
    return topSys;
  }
}
