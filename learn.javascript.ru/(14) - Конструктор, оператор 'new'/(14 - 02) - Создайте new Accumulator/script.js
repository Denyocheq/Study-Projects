let accumulator = new Accumulator(10); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Число?", 0);
  };
}
