module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*_test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};