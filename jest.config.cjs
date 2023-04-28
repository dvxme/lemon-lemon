/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef, immutable/no-mutation
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.cjs"
  },
  "moduleDirectories": [
    "src",
    "node_modules"
  ]
}