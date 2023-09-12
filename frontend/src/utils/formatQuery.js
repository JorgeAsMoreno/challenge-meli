export function formatQueryString(query) {
  if (query) {
    return query.toLowerCase().split(' ').join('-');
  } else {
    return '';
  }
}
