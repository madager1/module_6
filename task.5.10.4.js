let userName = prompt("Введите свое имя");
let userAge = +prompt("Введите ваш возраст");

let result = userAge % 10;
if(isNaN(userAge)){
    alert("Год не число или пустое имя");
} else {
  switch (result) {
    case 1:
      alert(`${userName}: ${userAge} год`);
      break;
    case 2:
      alert(`${userName}: ${userAge} года`);
      break;
    case 3:
    alert(`${userName}: ${userAge} года`);
      break;
    case 4:
        alert(`${userName}: ${userAge} года`);
      break;
    default:
      alert(`${userName}: ${userAge} лет`);
  }
}