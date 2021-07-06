const array = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// Task №1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

const getRandomValue = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}
const getRandomArray = (length, min, max) => {
  return Array.from({length}).map(el => getRandomValue(min, max));
}
console.log(`Task №1. Повернення масиву випадкових цілих чисел: ${JSON.stringify(getRandomArray(15, 1, 100))}`);

// Task №3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

const arrayIntegers = array.filter((number) => Number.isInteger(number));
let sum = 0;
for (let number of arrayIntegers) {
    sum += number;
  }
let getAverage = sum / arrayIntegers.length;
console.log(`Task №3. Середнє арифметичне цілих чисел: ${getAverage}`);
    
// Task №4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.

function getMedian(...numbers) {
  const sortedIntNumbers = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b) // фільтруємо цілі числа, сортуємо масив за зростанням
    if (sortedIntNumbers.length % 2 !== 0) { //рахуємо медіану, якщо кількість елементів непарна
      return sortedIntNumbers[Math.floor((sortedIntNumbers.length) / 2)];
    } else { // рахуємо медіану, якщо кількість елементів парна
      return (sortedIntNumbers[Math.floor((sortedIntNumbers.length) / 2)] +
        sortedIntNumbers[(Math.floor((sortedIntNumbers.length) / 2)) - 1]) / 2
  }
}
console.log(`Task №4. Медіана дорівнює: ${getMedian(5, 10, 7, 5.7, 9, 34, 9.6, 3, 45, 99)}`)
   
// Task №5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

let filterEvenNumbers = array.filter((number) => number % 2 !== 0);
console.log(`Task №5. Масив без парних чисел: ${filterEvenNumbers}`);

  
// Task №6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

let lengthArrayPositive = array.filter((number) => number > 0).length;
console.log(`Task №6. Кількість додатніх чисел в масиві: ${lengthArrayPositive}`);

// Task №7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
  
let getDividedByFive = array.filter((number) => number % 5 == 0);
console.log(`Task №7. Числа, що кратні 5: ${getDividedByFive}`);
  
//Task №9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.

function divideByThree(word){
  wordArray = (word.toLowerCase()).split("");

  const wordDivideArray = [];
  const divideSyllables = 3;

  for(let i = 0; i < wordArray.length; i += divideSyllables) {
    wordDivideArray.push(wordArray.slice(i, i + divideSyllables).join(""));
  }
  return wordDivideArray;
}
console.log(`Task №9. Слово розбивається на склади по три букви: ${divideByThree('commander')}`);

