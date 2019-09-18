import { Block } from './block';

export class TopSys {
    name: string;
    addressWidth: number;
    dataWidth: number;
    version: string | null;
    author: string | null;
    blocks: Array<Block>;
    addressMap: Array<string>;

    constructor(name: string, addressWidth: number = 12, dataWidth: number = 32) {
        this.name = name;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.version = null;
        this.author = null;
        this.blocks = [];
        this.addressMap = [];
        return;
    }
}
