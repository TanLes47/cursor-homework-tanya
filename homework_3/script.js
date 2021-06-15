//Функція №1
function getMaxDigit(number) {
    number = Math.abs(number);
    let arrDigits = number.toString().split(".").join("");
    let arrNumber = [];
    for (i = 0; i < arrDigits.length; i++) {
      arrNumber.push(+arrDigits[i]);
    }
    return Math.max(...arrNumber);
}

//Функція №2
function getNumberDegree(number, pow) {
  let result = 1; 
  if (pow > 0) { 
      for (let i = 1; i <= pow; i++) {
          result = result * number;
      }
  } else if (pow === 0) {
      result = 1; 
  } else if (pow < 0) { 
      pow = pow * (-1)
      for (let i = 1; i <= pow; i++) {
          result = result * number;
      }
      result = 1 / result;
  }
  return result;
}

//Функція №3
const UpperCase = (string) => string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();

//Функція №4
function netSalary( salary, payrolTax){
    return salary - (salary *(parseFloat(payrolTax/100)));
}

//Функція №5
function getRandomNumber(n, m) {
    return Math.ceil(Math.random() * (m - n) + n) ;
}

//Функція №6
function countLetter(letter, word){
    let count = 0;
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === letter ) {
          count++;
      } 
    }
    return count;
}

//Функція №7.
function convertCurrency(value) {
  let checkValue = value.toLowerCase() 
  if (checkValue.includes("uah")) { 
      let convertedMoney = Number(checkValue.split('uah').filter(Boolean).join('')) / 25; 
      return `${convertedMoney}$`;
  } else if (checkValue.includes("$")) { 
      let convertedMoney = Number(checkValue.split('$').filter(Boolean).join('')) * 25; 
      return `${convertedMoney}грн`;
  } else { return `Помилка! Введіть конвертовану валюту.` } 
}

//Функція №8
function generatePassword(length) {
    let password;
    if (length == '') {
      password = Math.floor(Math.random() * 100000000);
    }
    else {
      let cache = 1;
      for (let i = 1; i <= length; i++){
        cache = cache * 10;
      }
      password = Math.floor(Math.random() * cache);
    }
    return password;
  };

//Функція №9. 
 const deleteLettersByArr = (letter, word) => { 
  return word.split(letter).join('');
}
const deleteLettersByReplace = (letter, word) => {
  return word.replaceAll(letter, '');
}

//Функція №10
function isPalyndrom(enteredWords) {
    let newWords = enteredWords.replace(/[\s.,%]/g, '').split('').join('').toLowerCase();
    let reverseWords = enteredWords.replace(/[\s.,%]/g, '').split('').reverse().join('').toLowerCase();
    if (newWords === reverseWords) {
        return  true;
    }
    else {
        return false;
    }
  }

//Функція №11
function deleteDuplicateLetter(sentence) {
    sentence = sentence.toLowerCase();
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
      if (sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i]))
        newSentence += sentence[i];
    }
    return newSentence;
  }

document.writeln(`
<ol>
<li>Функція №1: ${ getMaxDigit(456987) }</li>
<li>Функція №2: ${ getNumberDegree(-2, 5) }</li>
<li>Функція №3: ${ UpperCase('sOLOmiya') }</li>
<li>Функція №4: ${ netSalary( 1000, 19.5) }</li>
<li>Функція №5: ${ getRandomNumber(-88, 988) }</li>
<li>Функція №6: ${ countLetter('о', 'колосок' ) }</li>
<li>Функція №7: ${ convertCurrency('2500UAH') }</li>
<li>Функція №8: ${ generatePassword(8)}</li>
<li>Функція №9: ${ deleteLettersByArr('к', 'крокодил') }</li>
<li>Функція №10: ${ isPalyndrom('я, н%е ,су гусеня') }</li>
<li>Функція №11: ${ deleteDuplicateLetter('Бісквіт був дуже ніжним') }</li>
</ol>`)
