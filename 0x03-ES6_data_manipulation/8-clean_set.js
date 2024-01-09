export default function cleanSet(set, startString) {
  let result = '';
  if (startString.length) {
    result = [...set]
      .filter((el) => el.startsWith(startString))
      .map((el) => el.replace(new RegExp(`^${startString}`), ''))
      .join('-');
  }
  return result;
}
