import { Field } from './field';

export class Register {
    name: string;
    offset: number;
    fields: Field[];

    constructor(name: string, offset: number) {
        this.name = name;
        this.offset = offset;
        this.fields = [];
        return;
    }

    addField(field: Field) {
        this.fields.push(field);
        return;
    }
}
