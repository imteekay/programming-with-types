class SafeDivisor {
  private divisor: number = 1;

  setDivisor(value: number) {
    if (value == 0) throw new Error('Value should not be 0');
    this.divisor = value;
  }

  divide(x: number): number {
    return x / this.divisor;
  }
}

function exploit() {
  let sd = new SafeDivisor();

  // @ts-expect-error: Property 'divisor' is private and only accessible within class 'SafeDivisor'
  sd.divisor = 0;
  sd.divide(42);
}
