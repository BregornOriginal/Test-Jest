const { countStringLength } = require('./sum');

const { reverseString } = require('./sum')

describe('counted string', () => {
  test('Check fail: The length of the word must be 4', () => {
    expect(countStringLength('fdsa')).toBe(4);
  });
  test('Check fail: The length of the word have to be between 1 to 10 characters', () => {
    expect(countStringLength('fd')).toBeLessThanOrEqual(10);
  });
  test('Check fail: The length of the word have to be between 1 to 10 characters', () => {
    expect(countStringLength('fdsafdas')).toBeGreaterThanOrEqual(1);
  });
});

describe('reverse string', () => {
  test('Check fail: This word have to be reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
})

