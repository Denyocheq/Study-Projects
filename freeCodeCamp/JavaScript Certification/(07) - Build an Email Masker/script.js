function maskEmail(email) {
  let domainIndex = email.indexOf("@");
  let domain = email.slice(domainIndex);
  let emailValue = email.slice(0, domainIndex);
  let maskedEmailValue;

  if (emailValue.length <= 2) {
    maskedEmailValue = "*".repeat(emailValue.length);
  } else {
    maskedEmailValue = emailValue[0] + "*".repeat(emailValue.length - 2) + emailValue[emailValue.length - 1];
  }

  return maskedEmailValue + domain;
}

let email = "denyocheq@gmail.com";

console.log(maskEmail(email));
