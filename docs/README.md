# Sudoo-UUID

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-UUID/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-UUID/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-UUID/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-UUID)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fuuid.svg)](https://www.npmjs.com/package/@sudoo/uuid)
[![downloads](https://img.shields.io/npm/dm/@sudoo/uuid.svg)](https://www.npmjs.com/package/@sudoo/uuid)

UUID for JS

## Install

```sh
yarn add @sudoo/uuid
# Or
npm install @sudoo/uuid --save
```

## Usage

Generate Version 1 UUID

```ts
import { UUID, UUIDVersion1 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion1.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
const stringUUID: string = UUIDVersion1.generateString(new Date()); // Override time stamp

const uuid: UUID = UUIDVersion1.generate(); // Instance
const uuid: UUID = UUIDVersion1.generate(new Date()); // Override time stamp
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Generate Version 4 UUID

```ts
import { UUID, UUIDVersion4 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion4.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

const uuid: UUID = UUIDVersion4.generate(); // Instance
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
