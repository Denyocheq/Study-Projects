function pow(x, n) {
  if (!isNaN(x) && n > 0 && n % 1 == 0) {
    return x ** n;
  }

  return "Неизвестное значение";
}

let a = +prompt("Введите число", "");
let b = +prompt("Введите степень", "");

alert(pow(a, b));
