// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
alert(menu.width);
alert(menu.title);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
