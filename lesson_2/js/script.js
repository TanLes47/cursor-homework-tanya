let number1 = 0;
let number2 = 0;
let sumNumbers = 0;

do {
    number1 = +prompt('Введіть будь-ласка число N ', ' ');
} while 
    (!Number.isInteger(number1) || isNaN(number1) || number1 === '');
    
do {
    number2 = +prompt('Введіть будь-ласка число M ', ' ');
} while 
    (!Number.isInteger(number2) || isNaN(number2) || number2 === '');

const skipEvenNumbers = confirm("Пропустити парні числа?");
console.log(skipEvenNumbers);

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(number1, number2);
for (minNumber; minNumber <= maxNumber; minNumber ++ ) {
        if(skipEvenNumbers && minNumber % 2 == 0) {
            continue;
        }
        else {
            sumNumbers = sumNumbers + minNumber;
        }
        console.log(sumNumbers);
}

document.querySelector( '.program' ).innerHTML =(` 
<ul>Отриманий результат:
    <li>Вивести перше число N = ${ number1 } </li>
    <li>Вивести наступне число M = ${ number2 } </li>
    <li>Пропустити парні числа = ${ skipEvenNumbers } </li>
    <li>Сума чисел = ${ sumNumbers } </li>
</ul>
 `)

