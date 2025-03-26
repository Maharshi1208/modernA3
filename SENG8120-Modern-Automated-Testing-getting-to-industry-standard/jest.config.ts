import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: [
    '**/*.test.ts',
    '**/*.spec.ts'
  ],
  roots: ['<rootDir>/src', '<rootDir>/test'],
};

export default config;
