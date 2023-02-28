export function formatId(id) {
  if (id > 99) {
    return `#${id}`;
  } else if (id > 9) {
    return `#0${id}`;
  } else {
    return `#00${id}`;
  }
}