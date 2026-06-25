let a = +prompt("a?", "1");
let b = +prompt("b?", "1");
let total = a + b;
if (Number.isFinite(total)) {
  alert(total.toFixed(2));
} else {
  alert("Неверный тип. Возможно вы ввели строку.");
}
