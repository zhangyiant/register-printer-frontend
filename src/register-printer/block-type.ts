import { Register } from './register';

export class BlockType {
    name: string;
    size: number;
    addressWidth: number;
    dataWidth: number;
    registers: Array<Register>;

    constructor(name: string, size: number, addressWidth: number, dataWidth: number) {
        this.name = name;
        this.size = size;
        this.addressWidth = addressWidth;
        this.dataWidth = dataWidth;
        this.registers = [];
        return;
    }

    addRegister(register: Register) {
        this.registers.push(register);
        return;
    }
}
