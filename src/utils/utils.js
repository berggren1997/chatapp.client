export function isNullOrWhiteSpace(value) {
  return value === null || value.match(/^\s*$/) !== null;
}
