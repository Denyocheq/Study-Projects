alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
