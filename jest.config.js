// jest.pure.config.js
module.exports = {
  testMatch: ['**/__tests__/**/*.test.ts?(x)'], // only pure logic tests
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
