// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// a. заповнити його 50 парними числами за допомоги циклу.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 2; i < 102; i++) {
//     if (i % 2 === 0) {
//         arrayEmpty.push(i);
//     }
// }
// console.log(arrayEmpty);

// b. заповнити його 50 непарними числами за допомоги циклу.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 1; i < 101; i++) {
//     if (!(i % 2 === 0)) {
//         arrayEmpty.push(i);
//     }
// }
// console.log(arrayEmpty);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 0; i < 20; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * 100));
// }
// console.log(arrayEmpty);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 0; i < 20; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * (733 - 8) + 8));
// }
// console.log(arrayEmpty);

// ----------------------------------------------------------------------

// 2. Вивести за допомогою console.log кожен третій елемен

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 0; i < 30; i+=3) {
//     arrayEmpty.push(i);
// }
// console.log(arrayEmpty)

// ----------------------------------------------------------------------

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 0; i < 30; i+=3) {
//     if (i % 2 === 0) {
//         arrayEmpty.push(i);
//     }
// }
// console.log(arrayEmpty)

// ----------------------------------------------------------------------

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arrayEmptyNew = [];
// console.log(arrayEmptyNew)
//
// for (let i = 0; i < 30; i+=3) {
//     if (i % 2 === 0) {
//         arrayEmptyNew.push(i);
//     }
// }
// console.log(arrayEmptyNew)

// ----------------------------------------------------------------------

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// console.log(array);
//
// let arrayNew = [];
//
// for (let i = 0; i < array.length; i++) {
//     if ((array[i] % 2) === 0) {
//         arrayNew.push(array[i - 1]);
//     }
// }
// console.log(arrayNew);

// ----------------------------------------------------------------------

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arrayChecks = [100, 250, 50, 168, 120, 345, 188];
// console.log(arrayChecks);
//
// let reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(arrayChecks.reduce(reducer));
//
// let total =  arrayChecks.reduce(reducer);
// let result = total / arrayChecks.length;
// console.log(result);

// ----------------------------------------------------------------------

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// let arrayEmptyNew = [];
//
// for (let i = 0; i < 10; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * 10));
//     arrayEmptyNew.push(arrayEmpty[i] * 5);
// }
// console.log(arrayEmpty);
// console.log(arrayEmptyNew);

// ----------------------------------------------------------------------

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrayAssorted = [15, 'ten', 10, 'two', 'five', false, 7, true];
// console.log(arrayAssorted);
//
// let arrayNew = [];
// console.log(arrayNew);
//
// for (let i = 0; i < arrayAssorted.length; i++) {
//     let array = arrayAssorted[i];
//     if (typeof array === "number" ) {
//         arrayNew.push(array);
//     }
// }
// console.log(arrayNew);

// ----------------------------------------------------------------------

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let users = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithId[i].address = citiesWithId[j];
//         }
//     }
// }
// users.push(usersWithId);
// console.log(users);

// ----------------------------------------------------------------------

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// for (let i = 0; i < 10; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * 10));
//     if ((arrayEmpty[i] % 2) === 0) {
//         console.log(arrayEmpty[i]);
//     }
// }
// console.log(arrayEmpty);

// ----------------------------------------------------------------------

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrayEmpty = [];
// console.log(arrayEmpty);
//
// let arrayEmptyNew = [];
// console.log(arrayEmptyNew);
//
// for (let i = 0; i < 10; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * 10));
//     arrayEmptyNew.push(arrayEmpty[i]);
// }
// console.log(arrayEmpty);
// console.log(arrayEmptyNew);

// ----------------------------------------------------------------------

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c'];
// let arrayStringNew = [];
//
// for (let i = 0; i < arrayString.length; i++) {
//     arrayStringNew = arrayStringNew + arrayString[i]
// }
// console.log(arrayString);
// console.log(arrayStringNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c'];
// let arrayStringNew = [];
//
// let i = 0;
// while (i < arrayString.length) {
//     arrayStringNew = arrayStringNew + arrayString[i]
//     i++
// }
//
// console.log(arrayString);
// console.log(arrayStringNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c'];
// let arrayStringNew = [];
//
// for (let string of arrayString) {
//     arrayStringNew = arrayStringNew + string;
// }
// console.log(arrayString);
// console.log(arrayStringNew);