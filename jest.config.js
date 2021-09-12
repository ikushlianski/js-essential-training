module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
