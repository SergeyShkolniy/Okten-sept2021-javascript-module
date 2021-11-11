// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let hi = 'hello';
// let company = 'owu';
// let web = 'com';
// let country = 'ua';
// let num1 = 1;
// let num10 = 10;
// let num999 = -999;
// let num123 = 123;
// const pi = 3.14;
// let num27 = 2.7;
// let num16 = 16;
// let iAmDeveloper = true;
// let iAmPilot = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hi);
// console.log(company);
// console.log(web);
// console.log(country);
// console.log(num1);
// console.log(num10);
// console.log(num999);
// console.log(num123);
// console.log(pi);
// console.log(num27);
// console.log(num16);
// console.log(iAmDeveloper);
// console.log(iAmPilot);
//
// alert(hi);
// alert(company);
// alert(web);
// alert(country);
// alert(num1);
// alert(num10);
// alert(num999);
// alert(num123);
// alert(pi);
// alert(num27);
// alert(num16);
// alert(iAmDeveloper);
// alert(iAmPilot);
//
// document.write(`${hi} ${company} ${web} ${country} ${num1} ${num10} ${num999} ${num123} ${pi} ${num27} ${num16} ${iAmDeveloper} ${iAmPilot} `);

// --------------------------------------------------------------------------------------------

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hi = 'sergey';
// let company = 'mti';
// let web = 'od.ua';
// let country = 'odessa';
// let num1 = 10;
// let num10 = 100;
// let num999 = 200;
// let num123 = 300;
// let num27 = 7.2;
// let num16 = 'sixteen';
// let iAmDeveloper = '100%';
// let iAmPilot = true;
//
// console.log(hi, company, web, country, num1, num10, num999, num123, num27, num16, iAmDeveloper, iAmPilot);
//
// alert(hi);
// alert(company);
// alert(web);
// alert(country);
// alert(num1);
// alert(num10);
// alert(num999);
// alert(num123);
// alert(num27);
// alert(num16);
// alert(iAmDeveloper);
// alert(iAmPilot);
//
// document.write(`${hi} ${company} ${web} ${country} ${num1} ${num10} ${num999} ${num123} ${num27} ${num16} ${iAmDeveloper} ${iAmPilot} `);

// --------------------------------------------------------------------------------------------

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Sergey ';
// let middleName = 'Aleksandrovich';
// let lastName = 'Shkolniy ';
// let person = (lastName + firstName + middleName);
// console.log(person);

// --------------------------------------------------------------------------------------------

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt('Введите Ваше имя');
// let middleName = prompt('Введите Ваше отчество');
// let age = prompt('Введите Ваш возрост');
//
// alert(`Поздравляю  ${firstName}  ${middleName}. Вам ${age} лет!`);

// --------------------------------------------------------------------------------------------

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);

// --------------------------------------------------------------------------------------------

// В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 === 6);
// console.log(5 > 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(10 !== 10);
// console.log(123 > '123');
// console.log(123 == '123');

// --------------------------------------------------------------------------------------------

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//     let a = 5;
//
// document.write(str + a + "<br/>"); будет 205 (str+num -просто соеденит)
// document.write(str - a + "<br/>"); будет 15 (str преобразовывается в число)
// document.write(str * "2" + "<br/>"); будет 40 (str преобразовывается в число)
// document.write(str / 2 + "<br/>"); будет 10 (str преобразовывается в число)

// --------------------------------------------------------------------------------------------