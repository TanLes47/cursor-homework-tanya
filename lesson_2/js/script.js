let firstInputedNumber = 0;
let nextInputedNumber = 0;
let sum = 0;

do {
    firstInputedNumber = +prompt('Введіть будь-ласка число N ', ' ');
} while 
    (!Number.isInteger(firstInputedNumber) || isNaN(firstInputedNumber) || firstInputedNumber === '');
    
do {
    nextInputedNumber = +prompt('Введіть будь-ласка число M ', ' ');
} while 
    (!Number.isInteger(nextInputedNumber) || isNaN(nextInputedNumber) || nextInputedNumber === '');

const skip = confirm('Пропускати парні числа?');
console.log(skip);

const minNumber = Math.min(firstInputedNumber, nextInputedNumber);
const maxNumber = Math.max(firstInputedNumber, nextInputedNumber);

for(let i = minNumber; i <= maxNumber; i++){
    if (skip && i % 2 ===0){
    continue; 
   }
   sum = sum + i;
   } 
console.log(sum);

document.querySelector( '.program' ).innerHTML =(` 
<ul>Отриманий результат:
    <li>Вивести перше число N = ${ firstInputedNumber } </li>
    <li>Вивести наступне число M = ${ nextInputedNumber } </li>
    <li>Пропустити парні числа = ${ skip } </li>
    <li>Сума чисел = ${ sum } </li>
</ul>
 `)

