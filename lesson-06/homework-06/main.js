// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const stringLength = (hello, lorem, js) => {
//     console.log(`длина ${hello} = ${hello.length}`);
//     console.log(`длина ${lorem} = ${lorem.length}`);
//     console.log(`длина ${js} = ${js.length}`);
// };
//
// stringLength('hello world',"lorem ipsum",`javascript is cool`)

// ----------------------------------------------------------------------

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const stringToUpperCase = (hello, lorem, js) => {
//     console.log(`${hello} = ${hello.toUpperCase()}`);
//     console.log(`${lorem} = ${lorem.toUpperCase()}`);
//     console.log(`${js} = ${js.toUpperCase()}`);
// };
//
// stringToUpperCase('hello world','lorem ipsum','javascript is cool');

// ----------------------------------------------------------------------

// // 3 - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// const stringToLowerCase = (hello, lorem, js) => {
//     console.log(`${hello} = ${hello.toLowerCase()}`);
//     console.log(`${lorem} = ${lorem.toLowerCase()}`);
//     console.log(`${js} = ${js.toLowerCase()}`);
// };
// stringToLowerCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

// ----------------------------------------------------------------------

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let strNew = str.trim()
// console.log( str.length, str.trim() ,strNew.length );

// ----------------------------------------------------------------------

// 5 - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let string = 'Каждый охотник желает знать';
//
// const stringToArray = (string) => string.split(' ');
// const array = stringToArray(string);
//
// console.log(array);
// document.writeln(array);

// ----------------------------------------------------------------------

// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let string = 'Каждый охотник желает знать';
//
// const deleteCharacter = (string, length) => string.slice(0, length);
//
// document.writeln(deleteCharacter(string, 7))

// ----------------------------------------------------------------------

// 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let string = "HTML JavaScript PHP";
//
// const insertDash = (string) => string.replaceAll(' ', '-').toUpperCase();
//
// document.writeln(insertDash(string))

// ----------------------------------------------------------------------

// 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// const firstToUpperCase = (string) => string[0].toUpperCase() + string.slice(1);
//
// document.write(firstToUpperCase('перетворює регістр першого символу рядка з нижнього регістру у верхній'));

// ----------------------------------------------------------------------

// // 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let string = 'яка повертає рядок, у якому кожне слово починається з великої літери';
// console.log(string);
//
// const everyWordToUpperCase = (string) => string.split(' ').map(index => index[0].toUpperCase() + index.slice(1)).join(' ');
//
// console.log(everyWordToUpperCase(string));
