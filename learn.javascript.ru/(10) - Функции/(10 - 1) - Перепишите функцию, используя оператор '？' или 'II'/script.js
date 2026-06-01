function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge1(age) {
  return age > 18 || confirm("Родители разрешили?");
}

alert(checkAge(14));
