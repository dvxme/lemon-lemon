// See https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
// eslint-disable-next-line no-undef, immutable/no-mutation
module.exports = {
  process: () => ({
    code: 'module.exports = {};',
  }),
  getCacheKey: () => 'svgTransform',
}