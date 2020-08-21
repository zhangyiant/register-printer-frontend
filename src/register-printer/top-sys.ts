import { Block } from './block';
import { BlockTemplate } from './block-template';
import { BlockInstance } from './block-instance';

export class TopSys {
    name: string;
    addressWidth: number;
    dataWidth: number;
    version: string | null;
    author: string | null;
    blockTemplates: Array<BlockTemplate>;
    blocks: Array<Block>;
    blockInstances: Array<BlockInstance>;

    constructor(name: string, addressWidth: number, dataWidth: number) {
        this.name = name;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.version = null;
        this.author = null;
        this.blockTemplates = [];
        this.blocks = [];
        this.blockInstances = [];
        return;
    }

  addBlockTemplate(blockTemplate: BlockTemplate) {
    this.blockTemplates.push(blockTemplate);
    return;
  }

  addBlockInstance(blockInstance: BlockInstance) {
    this.blockInstances.push(blockInstance);
    return;
  }

  toJson(): object {
    const jsonObj: object = {};
    jsonObj['name'] = this.name;
    jsonObj["addressWidth"] = this.addressWidth;
    jsonObj["dataWidth"] = this.dataWidth;
    jsonObj["version"] = this.version;
    jsonObj["author"] = this.author;
    jsonObj["blockTemplates"] = [];
    for (let blockType of this.blockTemplates) {
      const blockTypeJsonObj = blockType.toJson();
      jsonObj["blockTemplates"].push(blockTypeJsonObj);
    }
    jsonObj["blockInstances"] = [];
    for (let addressMap of this.blockInstances) {
      const addressMapJsonObj = addressMap.toJson();
      jsonObj["blockInstances"].push(addressMapJsonObj);
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
    const blockTemplatesJsonObj = jsonObj['blockTemplates'];
    for (const blockTemplateJsonObj of blockTemplatesJsonObj) {
      const blockTemplate = BlockTemplate.parseJson(
        blockTemplateJsonObj
      );
      topSys.addBlockTemplate(blockTemplate);
    }
    const blockInstancesJsonObj = jsonObj["blockInstances"];
    for (const blockInstanceJsonObj of blockInstancesJsonObj) {
      const blockInstance = BlockInstance.parseJson(
        blockInstanceJsonObj);
      topSys.addBlockInstance(blockInstance);
    }
    return topSys;
  }
}
