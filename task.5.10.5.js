let userAge = +prompt('Введите свой возраст');

if(userAge <= 17) {
    alert('К сожалению мы не можем выдать Вам кредит!');

} else if(userAge >= 18 && userAge <=21) {
    let userSum = +prompt('Мы можем выдать Вам максимум 50000 \nВведите сумму кратную 1000');
   sum = userSum % 1000;
    if(sum === 0) {
        alert(`Поздравляем! Вам одобрен кредит на ${userSum}`);
    } else if(sum !== 0) {
        alert('Вы ввели значение не кратное 1000')
    }


} else if(userAge >= 22 && userAge <= 35) {
    let userSumFirst = +prompt('Мы можем выдать Вам максимум 400000 \n Введите сумму кратную 1000')
    sumFirst = userSumFirst % 1000;
    if(sumFirst === 0) {
        alert(`Поздравляем! Вам одобрен кредит на ${userSumFirst}`);
    } else if(sumFirst !== 0) {
        alert('Вы ввели значение не кратное 1000')


    }
} else if(userAge >= 36 && userAge <= 65) {
    let userSumSecond = +prompt('Мы можем выдать Вам максимум 1000000 \n Введите сумму кратную 1000')
    sumSecond = userSumSecond % 1000;
    if(sumSecond === 0) {
        alert(`Поздравляем! Вам одобрен кредит на ${userSumSecond}`);
    } else if(sumSecond  !== 0) {
        alert('Вы ввели значение не кратное 1000')
    }
} 