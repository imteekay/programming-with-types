# Chapter 2

Basic types

• Common primitive types and their uses
• How Boolean expressions are evaluated
• Pitfalls of numerical types and text encoding
• Fundamental types for building data structures

## Designing functions that don’t return values

### The empty type

An empty type is a type that cannot have any value.

- For example a function that throws an error. It's not meant to return any type.

```typescript
const fs = require('fs');

function raise(message: string): never {
  console.error(`Error "${message}" raised at ${new Date()}`);
  throw new Error(message);
}

function readConfig(configFile: string): string {
  if (!fs.existsSync(configFile)) {
    raise(`Configuration file ${configFile} missing`);
  }

  return fs.readFileSync(configFile, 'utf-8');
}
```

([source code](./never.ts))

The `raise` function will not return anything. If anyone changes the function to return anything, it won't compile as it's still expected to not return anything.

Consider using an empty type whenever you have a non-returning function or otherwise want to explicitly show that it’s impossible to have a value.

A function that doesn't explicitly return a value implicitly returns the value `undefined` in JavaScript. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.

### The unit type

Functions that we call only for the side-effect like the `console.log`. It performs a log on the debugger and it doesn't return a meaningful value. But it returns a type, so it can't be a `never` type. We use `void` in these cases.

```typescript
function greeting() {
  console.log('Hello!');
}

greeting();
```

([source code](./void.ts))
