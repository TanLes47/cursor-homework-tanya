//створіть 3 змінних з наступними значеннями:
const jacketPrice = 15.678;
const suitPrice = 123.965;
const jeansPrice = 90.2345;
console.log(jacketPrice);
console.log(suitPrice);
console.log(jeansPrice);

//виведіть максимальне число
const maxPrice = Math.max(jacketPrice, suitPrice, jeansPrice);
console.log(maxPrice);

//виведіть мінімальне число
const minPrice = Math.min(jacketPrice, suitPrice, jeansPrice);
console.log(minPrice)

//складіть вартість всіх товарів
const clothesPrice = jacketPrice + suitPrice + jeansPrice;
console.log(clothesPrice);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в меншу сторону.
const priceWithoutCoins = Math.trunc(jacketPrice) + Math.trunc(suitPrice) + Math.trunc(jeansPrice);
console.log(priceWithoutCoins);

//Виведіть суму товарів округлену до сотень.
const sumClothesPrice = (Math.floor(priceWithoutCoins/100) * 100); 
console.log(sumClothesPrice); 

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isEven = (Math.floor(clothesPrice) % 2 === 0) ? true : false;
console.log(isEven)

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const customerPay = 500;
const amountOfRest = customerPay - clothesPrice;
console.log(amountOfRest);

//Виведіть середнє значення цін, округлене до другого знаку після коми 
const averagePrice = +(clothesPrice / 3).toFixed(2);
console.log(averagePrice);

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const discount = Math.trunc(Math.random() * 100);
console.log(discount + '%');

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const discountSum = +((clothesPrice * discount)/100).toFixed(2);
console.log(discountSum);
const priceAfterdiscount = +((clothesPrice - discountSum).toFixed(2));
console.log(priceAfterdiscount);

//Виведіть чистий прибуток
const netProfit = +((clothesPrice / 2) - discountSum).toFixed(2);
console.log(netProfit);

document.querySelector(".listInfo").innerHTML = `
<ul>Ціни на одяг:
    <li>Куртка ${jacketPrice}</li>
    <li>Костюм ${suitPrice}</li>
    <li>Джинси ${jeansPrice}</li>
</ul>
<ul>Інформація про ціни:
  <li>Максимальна ціна: ${maxPrice}</li>
  <li>Мінімальна ціна: ${minPrice}</li>
  <li>Ціна на весь одяг: ${clothesPrice}</li>
  <li>Ціна одягу без копійок: ${priceWithoutCoins}</li>
  <li>Сума товару округлена до сотень: ${sumClothesPrice}</li>
  <li>Сума є парним числом? ${isEven}</li>
  <li>Решта з 500: ${amountOfRest}</li>
  <li>Середнє значення цін: ${averagePrice}</li>
  <li>Відсоток знижки: ${discount + '%'}</li>
  <li>Сума знижки: ${discountSum}</li>
  <li>Сума оплати після знижки: ${priceAfterdiscount}</li>
  <li>Чистий приибуток: ${netProfit}</li>
</ul>`;
