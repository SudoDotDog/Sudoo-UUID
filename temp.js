const now = Date.now();
const nano = now * 10000 + 122192928000000000;

console.log((nano).toString(16));
const nanoLow = nano % 0x100000000;
console.log(nanoLow.toString(16));
const timeLow = new Uint8Array([
    nanoLow >>> 24 & 0xff,
    nanoLow >>> 16 & 0xff,
    nanoLow >>> 8 & 0xff,
    nanoLow >>> 0 & 0xff,
]);
const nanoMedium = Math.floor(nano / 0x100000000) % 0x10000;
console.log(nanoMedium.toString(16));
const timeMedium = new Uint8Array([
    nanoMedium >>> 8 & 0xff,
    nanoMedium >>> 0 & 0xff,
]);
console.log(timeLow);
console.log(timeMedium);
const nanoHigh = Math.floor(nano / 0x1000000000000) % 0x10000;
console.log(nanoHigh.toString(16));
const timeHighAndVersion = new Uint8Array([
    (nanoHigh >>> 8 & 0xf) | 0x10,
    nanoHigh >>> 0 & 0xff,
]);
console.log(timeHighAndVersion);


const random = Math.floor(Math.random() * 0xffff);
console.log(random.toString(16));

const node = Math.floor(Math.random() * 0xffffffffffff);
console.log(node.toString(16));
