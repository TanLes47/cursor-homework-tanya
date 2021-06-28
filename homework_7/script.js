const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1.
function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
}

console.log(
    `1. getMyTaxes.call(ukraine, 1500): ${getMyTaxes.call(ukraine, 1500)}`
);

//2.
function getMiddleTaxes(country) {
    return +(this.tax * this.middleSalary).toFixed(2);
}

console.log(`2. getMiddleTaxes.call(latvia): ${getMiddleTaxes.call(latvia)}`);

//3.
function getTotalTaxes(country) {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.log(`3. getTotalTaxes.call(litva): ${getTotalTaxes.call(litva)}`);

//4.
function getMySalary() {
    setInterval(() => {
        const salary = +Math.floor(Math.random() * 500 + 1500).toFixed(2);
        const taxes = +(salary * this.tax).toFixed(2);
        const profit = +(salary - taxes);
        const mySalary = {
            salary: salary,
            taxes: taxes,
            profit: profit,
        };

        return console.log(mySalary);
    }, 10000)
}

console.log(`4. getMySalary.call(ukraine):`)
getMySalary.call(ukraine);