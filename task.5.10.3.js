
let userName = prompt('Введите свое имя');
let userYear = +prompt('Введите год рождения');
let userAge = 2024 - userYear;
if (!isNaN(userYear)) {
  alert (`${userName} ${userAge} год`);
} else {
    alert("Год должен быть числом");
}



