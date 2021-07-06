
const outputs = document.querySelectorAll(".output");
//Task №1
document.querySelector(".btn-1").addEventListener("click", () => {

const length = document.querySelector("#input1-length").value;
const min = document.querySelector("#input1-min").value;
const max = document.querySelector("#input1-max").value; 

    if (length === "" || min === "" || max === "") {
        outputs[0].innerHTML = "Введіть значення:";
    } else {
    outputs[0].innerHTML = `Масив в діапазоні від ${min} до ${max}: ${JSON.stringify(getRandomArray(15, 1, 100))}`;
    } 
});

//Task №3

document.querySelector(".btn-2").addEventListener("click", () => {
    outputs[1].innerHTML = `Середнє арифметичне чисел в масиві = ${getAverage}`;
});

//Task №6

document.querySelector(".btn-3").addEventListener("click", () => {
    outputs[2].innerHTML = `Кількість додатніх чисел в масиві: ${lengthArrayPositive}`;
});

//Task №7

document.querySelector(".btn-4").addEventListener("click", () => {
    outputs[3].innerHTML = `Числа, що кратні 5: ${getDividedByFive}`;
});

