function truncateString(string, length) {
  return string.length > length ? string.slice(0, length) + "..." : string;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
