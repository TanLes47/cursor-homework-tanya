let firstNumber = +prompt("Введіть число N:");
console.log(firstNumber);

let checkFirstNumber = Number.isInteger(firstNumber);
console.log(checkFirstNumber);

let nextNumber = +prompt("Введіть число M:");
console.log(nextNumber);

let checkNextNumber = Number.isInteger(nextNumber);
console.log(checkNextNumber);

const skipEvenNumbers = confirm("Пропустити парні числа?");
console.log(skipEvenNumbers);

let minNumber = Math.min(firstNumber, nextNumber);
let maxNumber = Math.max(firstNumber, nextNumber);
let sumNumbers = 0;
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
    <li>Вивести перше число N = ${ firstNumber } </li>
    <li>Вивести наступне число M = ${ nextNumber } </li>
    <li>Пропустити парні числа = ${ skipEvenNumbers } </li>
    <li>Сума чисел = ${ sumNumbers } </li>
</ul>
 `)

