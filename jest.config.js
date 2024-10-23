/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;