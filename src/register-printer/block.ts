export class Block {
    name: string;
    size: number;
    addressLength: number;
    dataLength: number;
    registers: Array<string>;

    constructor(name: string, size: number, addressLength: number, dataLength: number) {
        this.name = name;
        this.size = size;
        this.addressLength = addressLength;
        this.dataLength = dataLength;
        return;
    }
}
