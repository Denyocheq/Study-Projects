function confirmEnding(string, substring) {
  return string.slice(-substring.length) === substring;
}

console.log(confirmEnding("He has to give me a new name", "name"));
