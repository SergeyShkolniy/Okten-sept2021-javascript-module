// --створити масив з:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
//     - та вивести його в консоль

/*let arrayNumbers = [1, 2, 3, 4, 5];
console.log(arrayNumbers);

let arrayStrings = ['one', 'two', 'three', 'four', 'five'];
console.log(arrayStrings);

let arrayAssorted = [1, 'two', true, false, 'five'];
console.log(arrayAssorted);*/

// ----------------------------------------------------------------------

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrayEmpty = [];
//
// arrayEmpty[0] = 1;
// arrayEmpty[1] = 'two';
// arrayEmpty[2] = 'three';
// arrayEmpty[3] = false;
// arrayEmpty[4] = true;
// arrayEmpty[5] = 55;
// arrayEmpty[6] = {name:'sergey', age:37, gender: 'male'};
//
// console.log(arrayEmpty);

// ----------------------------------------------------------------------

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Произвольный текст </div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Произвольный текст ${i} шаг </div>`)
//     document.write('Произвольный текст' + ' ' + i + ' ' + 'шаг')
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1> Произвольный текст </h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(` <h1> Произвольный текст ${i} шаг`)
//     i++;
// }

// ----------------------------------------------------------------------

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//
// for (let arrayElement of arrayNum) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayStr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//
// for (let arrayElement of arrayStr) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayAssorted = ['one', 2, 'three', 'four', 'five', 6, 'seven', false, true, 'ten'];
//
// for (let arrayElement of arrayAssorted) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayAssorted = ['one', 2, false, 'four', 'five', true, 7, false, true, 10];
// console.log(arrayAssorted);
//
// for (let arrayElement of arrayAssorted) {
//     if (typeof arrayElement === "boolean"){
//         console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayAssorted = ['one', 2, false, 'four', 'five', true, 7, false, true, 10];
// console.log(arrayAssorted);
//
// for (let arrayElement of arrayAssorted) {
//     if (typeof arrayElement === "number"){
//         console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayAssorted = ['one', 2, false, 'four', 'five', true, 7, false, true, 10];
// console.log(arrayAssorted);
//
// for (let arrayElement of arrayAssorted) {
//     if (typeof arrayElement === "string"){
//         console.log(arrayElement);
//     }
// }

// ----------------------------------------------------------------------

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayEmpty = [];
//
// arrayEmpty[0] = false;
// arrayEmpty[1] = 'false';
// arrayEmpty[2] = 777;
// arrayEmpty[3] = true;
// arrayEmpty[4] = 'true';
// arrayEmpty[5] = 555;
// arrayEmpty[6] = 'text';
// arrayEmpty[7] = false;
// arrayEmpty[8] = 333;
// arrayEmpty[9] = 'zero';
// console.log(arrayEmpty);
//
// for (let arrayElement of arrayEmpty){
//     console.log(arrayElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>Текущий шаг ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>Текущий шаг ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log(i);
//     document.write(`<div>Текущий шаг ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ((i % 2) === 0) {
//         console.log(i);
//         document.write(`<div>Текущий шаг ${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if((i % 2) !== 0) {
//         console.log(i);
//         document.write(`<div>Текущий шаг ${i}</div>`);
//     }
// }