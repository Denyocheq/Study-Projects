let login = prompt("Кто там?", "");

if (login == "Админ") {
  let password = prompt("Пароль?", "");

  if (password == "Я главный") {
    alert("Здравствуйте");
  } else if (password == null || password == "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login == null || login == "") {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
