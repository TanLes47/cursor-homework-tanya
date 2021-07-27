let lengthString = prompt("Введіть кількість символів", 1);

while (isNaN(lengthString)) {
    lengthString = +Math.trunc(
    prompt("Помилка! Введіть кількість символів", 1));
}

async function getRandomChinese(length) {
    let i = 0;
    let chineseString = "";

    while (i < length) {
    const randomChinese = new Promise((resolve, reject) => {
        setTimeout(() => {
            const sign = (Date.now().toString().slice(-5));
            const string = (String.fromCharCode(sign));
        resolve (string);
        reject (string);
        i++;
        }, i*50);        
    });
    chineseString = chineseString + await randomChinese;   
    }
    
    return chineseString;
}

getRandomChinese(lengthString).then(console.log);




  