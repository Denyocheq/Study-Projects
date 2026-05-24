let login = prompt("Ваш логин: ");
let message = login == "Сотрудник" ? "Привет" : login == "Директор" ? "Здравствуйте" : login == "" ? "Нет логина" : "";
alert(message);
