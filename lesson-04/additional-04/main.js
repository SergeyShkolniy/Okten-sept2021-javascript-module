// 1 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function numberOfArguments() {
//
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         let sum = arguments[0] + arguments[1];
//         console.log(sum);
//     }
// }
//
// numberOfArguments(10, 50);

// ----------------------------------------------------------------------

// 2 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
// результат
//   [3,5,7,9]


// function additionOfArrayArguments() {
//     let arguments1 = arguments[0];
//     let arguments2 = arguments[1];
//     console.log(arguments1);
//     console.log(arguments2);
//
//     let newArray = [];
//
//     for (let i = 0; i < arguments1.length; i++) {
//         for (let j = 0; j < arguments2.length; j++) {
//             if (i === j){
//                 let sum = arguments1[i] + arguments2[j];
//                 newArray.push(sum);
//             }
//         }
//     }
//
//     console.log(newArray);
// }
// additionOfArrayArguments([1,2,3,4], [2,3,4,5])

// ----------------------------------------------------------------------

//3 - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function returnsArrayOfKeys() {
//     let argument = arguments[0];
//
//     let arg0 = argument[0];
//     console.log(arg0);
//
//     let arg1 = argument[1];
//     console.log(arg1);
//
//     let newArray = [];
//
//     for (const key in arg0) {
//         newArray.push(key);
//     }for (const key in arg1) {
//         newArray.push(key);
//     }
//
//     console.log(newArray);
// }
//
// returnsArrayOfKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]);

// ----------------------------------------------------------------------

// 4 - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function returnsArrayOfValues() {
//     let argument = arguments[0];
//
//     let arg0 = argument[0];
//     console.log(arg0);
//
//     let arg1 = argument[1];
//     console.log(arg1);
//
//     let newArray = [];
//
//     for (const key in arg0) {
//         newArray.push(arg0[key]);
//     }for (const key in arg1) {
//         newArray.push(arg1[key]);
//     }
//
//     console.log(newArray);
// }
//
// returnsArrayOfValues([{name: 'Dima', age: 13}, {model: 'Camry'}]);

