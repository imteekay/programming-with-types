// Not composable
function findFirstNegativeNumberNotComposable(
  numbers: number[]
): number | void {
  for (let i of numbers) {
    if (i < 0) return i;
  }
  console.error('No matching value found');
}

function findFirstOneCharacterStringNotComposable(
  strings: string[]
): string | void {
  for (let str of strings) {
    if (str.length == 1) return str;
  }
  console.error('No matching value found');
}

// Composable
function first<T>(range: T[], verify: (element: T) => boolean): T | void {
  for (let element of range) {
    if (verify(element)) return element;
  }
}

function findFirstNegativeNumber(numbers: number[]): number | void {
  return first(numbers, (n) => n < 0);
}

function findFirstOneCharacterString(strings: string[]): string | void {
  return first(strings, (str) => str.length == 1);
}
