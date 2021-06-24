let array = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const outputs = document.querySelectorAll(".output");

// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
document.querySelector(".btn-1").addEventListener("click", () => {
    const maxNumber = document.querySelector("#input1-max").value; 
    const minNumber = document.querySelector("#input1-min").value;
    const length = document.querySelector("#input1-length").value;

    if (maxNumber === "" || minNumber === "" || length === "") {
    outputs[0].innerHTML = "Введіть значення:";
    } else {
    let randomArray= [];
    const startValue = Math.min(maxNumber, minNumber); 
    const endValue = Math.max(maxNumber, minNumber);
    
    for (let i = 0; i < length; i++) {
    randomArray.push(Math.trunc(startValue + Math.random() * (endValue - startValue))
        );
    }
    outputs[0].innerHTML = `Масив в діапазоні від ${startValue} до ${endValue}: ${randomArray}`;
  }
});

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
document.querySelector(".btn-3").addEventListener("click", () => {
    const arrayIntegers = array.filter((number) => Number.isInteger(number));
    let sum = 0;
    for (let number of arrayIntegers) {
        sum += number;
    }
    let getAverage = sum / arrayIntegers.length;
    outputs[1].innerHTML = `Середнє арифметичне чисел в масиві = ${getAverage}`;
  });
  
// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
document.querySelector(".btn-4").addEventListener("click", () => {
    const arrayIntegers = array.filter((number) => Number.isInteger(number)).sort((a, b) => {
        return a - b;
        });
    let getMedian = 0;
    let middleArray = arrayIntegers.length / 2;
    if (middleArray % 1 == 0) {
      getMedian =(arrayIntegers[middleArray - 1] + arrayIntegers[middleArray]) / 2;
    } else {
      getMedian = arrayIntegers[Math.floor(middleArray)];
    }
    outputs[2].innerHTML = `Медіана масиву = ${getMedian}`;
});

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
document.querySelector(".btn-5").addEventListener("click", () => {
    let arrayOdd = array.filter((number) => number % 2 !== 0);
    outputs[3].innerHTML = `Масив без парних чисел: ${arrayOdd}`;
});
  
// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
document.querySelector(".btn-6").addEventListener("click", () => {
    let lengthArrayPositive = array.filter((number) => number > 0).length;
    outputs[4].innerHTML = `Кількість додатніх чисел в масиві: ${lengthArrayPositive}`;
});
  
// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
  document.querySelector(".btn-7").addEventListener("click", () => {
    let getDividedByFive = array.filter((number) => number % 5 == 0);
    outputs[5].innerHTML = `Числа, що кратні 5: ${getDividedByFive}`;
});
  
//9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
document.querySelector(".btn-9").addEventListener("click", () => {
    const word = document.querySelector("#input9").value.toLowerCase(); 
    let arrayLetters = word.replaceAll(" ", "").split(""); 
    let result = [];
    for (let i = 0; i < arrayLetters.length; i++) {
        [a, b, c, ...arrayLetters] = arrayLetters; 
        result.push(a + b + c);
    }
    outputs[6].innerHTML = `Слово ${word} розбивається на склади по три букви: ${result}`;
});

