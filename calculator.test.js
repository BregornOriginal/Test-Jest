const calculate = require('./calculator.js');

describe('Addition', () => {
  test('zero and positive number', () => {
    expect(calculate.add(0, 87)).toBe(87);
  });
  test('negative and positive number', () => {
    expect(calculate.add(-2, 5)).toBe(3);
  });
  test('negative and negative number', () => {
    expect(calculate.add(-2, -3)).toBe(-5);
  });
});

describe('Substraction', () => {
  test('zero and positive number', () => {
    expect(calculate.substract(0, 87)).toBe(-87);
  });
  test('negative and positive number', () => {
    expect(calculate.substract(-2, 5)).toBe(-7);
  });
  test('negative and negative number', () => {
    expect(calculate.substract(-2, -3)).toBe(1);
  });
});

describe('Multiply', () => {
  test('zero and positive number', () => {
    expect(calculate.multiply(0, 87)).toBe(0);
  });
  test('negative and positive number', () => {
    expect(calculate.multiply(-2, 5)).toBe(-10);
  });
  test('negative and negative number', () => {
    expect(calculate.multiply(-2, -3)).toBe(6);
  });
});

describe('Divide', () => {
  test('zero and positive number', () => {
    expect(calculate.divide(0, 87)).toBe(0);
  });
  test('negative and positive number', () => {
    expect(calculate.divide(-2, 5)).toBe(-0.4);
  });
  test('negative and negative number', () => {
    expect(calculate.divide(-10, -2)).toBe(5);
  });
});
