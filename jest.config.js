/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: 'ts-jest'
};

module.exports = config;