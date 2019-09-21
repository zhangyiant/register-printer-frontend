export class Field {
    name: string;
    msb: number;
    lsb: number;
    defaultValue: number;
    access: string;

    constructor(name: string, msb: number, lsb: number, defaultValue: number, access: string) {
        this.name = name;
        this.msb = msb;
        this.lsb = lsb;
        this.defaultValue = defaultValue,
        this.access = access;
    }
}
