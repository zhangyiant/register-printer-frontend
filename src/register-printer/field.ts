export class Field {
    constructor(
        public name: string,
        public msb: number,
        public lsb: number,
        public defaultValue: number,
        public access: string,
        public description: string = "") {
    }
}
