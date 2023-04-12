// source: https://github.com/vercel/next.js/tree/canary/examples/with-jest

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\\\.(ts|tsx)$': 'ts-jest',
  },
}

module.exports = createJestConfig(customJestConfig)