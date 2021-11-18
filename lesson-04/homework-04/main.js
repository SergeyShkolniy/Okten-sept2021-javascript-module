// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaOfRectangle(height, width) {
//     let rectangle = height * width;
//
//     return rectangle;
// }
//
// let result = areaOfRectangle(15, 10);
// console.log(result);

// ----------------------------------------------------------------------

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaOfCircle(pi, radius){
//     let circle = pi * (Math.pow(radius, 2));
//
//     return circle;
// }
//
// let result = areaOfCircle(3.14, 15);
// console.log(result);

// ----------------------------------------------------------------------

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(height, radius, pi) {
//     let cylinder = 2 * pi * radius * (height + radius);
//
//     return cylinder;
// }
//
// let result = areaCylinder(10, 5, 3.14);
// console.log(result);

// ----------------------------------------------------------------------

// 4 - створити функцію яка приймає масив та виводить кожен його елемент

// function array() {
//     for (let argument of arguments) {
//         console.log(argument);
//     }
// }
//
// array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// ----------------------------------------------------------------------

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function array() {
//     for (let argument of arguments) {
//         document.write(`<p> ${argument} </p>`);
//     }
// }
//
// array('первый аргумент', 'второй аргумент', 'третий аргумент');

// ----------------------------------------------------------------------

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listElements(text) {
//     document.write(`<ul>`)
//         document.write(`<li> ${text} </li>`);
//         document.write(`<li> ${text} </li>`);
//         document.write(`<li> ${text} </li>`);
//     document.write(`</ul>`)
// }
//
// listElements('произвольный текст для li');

// ----------------------------------------------------------------------

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listElements(text, size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++){
//         document.write(`<li> ${text} </li>`);
//     }
//     document.write(`</ul>`)
// }
//
// listElements('произвольный текст для li', 3);

// ----------------------------------------------------------------------

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function takesAnArray() {
//     document.write(`<ul>`);
//
//     for (let argument of arguments) {
//         document.write(`<li> ${argument} </li>`);
//     }
//
//     document.write(`</ul>`);
// }
//
// takesAnArray(10, 25, false, 'text', true, 75, 'ten', 'five');

// ----------------------------------------------------------------------

// 9 - задания нет в списке для выполнения

// ----------------------------------------------------------------------

// 10 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function takesAnObject() {
//
//
//     for (let argument of arguments) {
//         document.write(`<div>`);
//          document.write(`<p> ${argument.id}: ${argument.name} - ${argument.age} </p>`);
//         document.write(`</div>`);
//     }
// }
//
// takesAnObject({ id: 1, name: 'Sergey', age: 37 }, { id: 2, name: 'Alena', age: 38 }, { id: 3, name: 'Evgeniy', age: 8 });