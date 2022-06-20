const capitalize = require('./capitalize');

test ('This string must have the first character capitalized', () => {
  expect(capitalize('julio')).toBe('Julio');
});
