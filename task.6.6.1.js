let word = prompt ('Введите слово');
let arrayWord = Array.from(word); 
let reverseArrayWord = Array.from(word).reverse(); 


let isPalindrome = true;
for (let i = 0; i < arrayWord.length; i+=1) {
if (arrayWord[i] !== reverseArrayWord[i])
    isPalindrome = false;
break;
}

if (isPalindrome) {
    console.log(`Слово ${word} является палиндром`);
}
else {
    console.log(`Слово ${word} не является палиндром`);
}