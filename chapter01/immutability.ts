function safeDivide(): number {
  const x: number = 42;

  if (x == 0) throw new Error('x should not be 0');

  // @ts-expect-error: Cannot assign to 'x' because it is a constant.
  x = x - 42;

  return 42 / x;
}

safeDivide();
