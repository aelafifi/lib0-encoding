import {encoding} from "lib0";

export function createEncoder(): Encoder {
    return new Encoder();
}

export class Encoder {
    constructor(private encoder: encoding.Encoder = encoding.createEncoder()) {
    }

    length(): number {
        return encoding.length(this.encoder);
    }

    toUint8Array(): Uint8Array {
        return encoding.toUint8Array(this.encoder);
    }

    writeUint8(num: number): this {
        encoding.writeUint8(this.encoder, num);
        return this;
    }

    writeUint16(num: number): this {
        encoding.writeUint16(this.encoder, num);
        return this;
    }

    writeUint32(num: number): this {
        encoding.writeUint32(this.encoder, num);
        return this;
    }

    writeUint32BigEndian(num: number): this {
        encoding.writeUint32BigEndian(this.encoder, num);
        return this;
    }

    writeVarUint(num: number): this {
        encoding.writeVarUint(this.encoder, num);
        return this;
    }

    writeVarInt(num: number): this {
        encoding.writeVarInt(this.encoder, num);
        return this;
    }

    writeVarString(str: string): this {
        encoding.writeVarString(this.encoder, str);
        return this;
    }

    writeBinaryEncoder(append: encoding.Encoder): this {
        encoding.writeBinaryEncoder(this.encoder, append);
        return this;
    }

    writeUint8Array(uint8Array: Uint8Array): this {
        encoding.writeUint8Array(this.encoder, uint8Array);
        return this;
    }

    writeVarUint8Array(uint8Array: Uint8Array): this {
        encoding.writeVarUint8Array(this.encoder, uint8Array);
        return this;
    }

    writeOnDataView(len: number): DataView {
        return encoding.writeOnDataView(this.encoder, len);
    }

    writeFloat32(num: number): this {
        encoding.writeFloat32(this.encoder, num);
        return this;
    }

    writeFloat64(num: number): this {
        encoding.writeFloat64(this.encoder, num);
        return this;
    }

    writeBigInt64(num: bigint): this {
        encoding.writeBigInt64(this.encoder, num);
        return this;
    }

    set(pos: number, num: number): this {
        encoding.set(this.encoder, pos, num);
        return this;
    }

    setUint8(pos: number, num: number): this {
        encoding.setUint8(this.encoder, pos, num);
        return this;
    }

    setUint16(pos: number, num: number): this {
        encoding.setUint16(this.encoder, pos, num);
        return this;
    }

    setUint32(pos: number, num: number): this {
        encoding.setUint32(this.encoder, pos, num);
        return this;
    }

    writeBigUint64(num: bigint): this {
        encoding.writeBigUint64(this.encoder, num);
        return this;
    }

    writeAny(data: undefined | null | number | bigint | boolean | string | {
        [x: string]: any;
    } | Array<any> | Uint8Array): this {
        encoding.writeAny(this.encoder, data)
        return this;
    }
}


