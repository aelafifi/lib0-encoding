# lib0 encoder/decoder

Optimized encoder/decoder based on lib0 NPM package

## Encoding

### Encoding Using `lib0`

```js
import {encoding} from "lib0";

const encoder = encoding.createEncoder();
encoding.writeUint8(123);
encoding.writeFloat64(Math.PI);
encoding.writeVarString("Hello, world!");

const encodedData = encoding.toUint8Array(encoder);
```

### Encoding Using `lib0-encoding`

```js
import {createEncoder} from "lib0-encoding";

const encodedData = createEncoder()
    .writeUint8(123)
    .writeFloat64(Math.PI)
    .writeVarString("Hello, world!")
    .toUint8Array(encoder);
```

## Decoding

### Decoding Using `lib0`

```js
import {decoding} from "lib0";

const decoder = decoding.createDecoder(encodedData);
const number = decoding.readUint8(decoder);
const pi = decoding.readFloat64(decoder);
const hello = decoding.readVarString(decoder);
```

### Decoding Using `lib0-encoding`

```js
import {createDecoder} from "lib0-encoding";

const decoder = createDecoder(encodedData);
const number = decoder.readUint8();
const pi = decoder.readFloat64();
const hello = decoder.readVarString();
```
