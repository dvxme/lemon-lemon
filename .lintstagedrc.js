export default {
  '*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc',
  ]
}