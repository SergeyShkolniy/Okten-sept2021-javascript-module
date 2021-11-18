// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function smallestNumber( one, two, three) {
//     let result = (one <= two && one <= three) ? 'Первое число наименьшее' : ( two <= one && two <= three ) ? 'Второе число наименьшее' : 'Третье число наименьшее';
//     console.log(result);
// }
// smallestNumber(5, 1, 10);

// ----------------------------------------------------------------------

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function greatestNumber( one, two, three) {
//     let result = (one >= two && one >= three) ? 'Первое число наибольшее' : ( two >= one && two >= three ) ? 'Второе число наибольшее' : 'Третье число наибольшее';
//     console.log(result);
// }
// greatestNumber(50, 100, 10);

// ----------------------------------------------------------------------

// 3 - створити функцію яка повертає найбільше число з масиву

// function returnsTheLargestNumber() {
//
//     let largest = arguments[0];
//     for (let argument of arguments) {
//         if (argument > largest) {
//             largest = argument;
//         }
//     }
//     return largest;
// }
//
//  let answer = returnsTheLargestNumber(10, 20, 30, 40, 50);
// console.log(answer);

// ----------------------------------------------------------------------

// 4 - створити функцію яка повертає найменьше число з масиву

// function returnsTheSmallestNumber() {
//
//     let smallest = arguments[0];
//     for (let argument of arguments) {
//         if (argument < smallest) {
//             smallest = argument;
//         }
//     }
//     return smallest;
// }
//
// let answer = returnsTheSmallestNumber(10, 20, 30, 40, 50);
// console.log(answer);

// ----------------------------------------------------------------------

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function summationArray() {
//     let result = 0;
//     for (let argument of arguments) {
//         result += argument;
//     }
//     return result;
// }
//
// let answer = summationArray(10, 20, 30, 40, 50);
// console.log(answer);

// ----------------------------------------------------------------------

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averageArray() {
//     let sum = 0;
//     for (let argument of arguments) {
//         sum += argument;
//     }
//     let result = sum / arguments.length;
//
//     return result;
// }
//
// let answer = averageArray(10, 20, 30, 40, 50);
// console.log(answer);

// ----------------------------------------------------------------------

// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function smallAndBigNumber() {
//
//     let small = arguments[0];
//     let big = arguments[0];
//
//     for (let argument of arguments) {
//         if (argument < small) {
//             small = argument;
//         } else if (argument > small) {
//             big = argument
//         }
//     }
//     console.log( `наибольшее ${big}`);
//     return small;
// }
//
// let answer = smallAndBigNumber(10, 20, 30, 40, 50);
// console.log( `наименьшее ${answer}`);

// ----------------------------------------------------------------------

// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let newArray = [];
//
// function randomArray() {
//     for (let i = 0; i < 10; i++) {
//         let num = Math.round(Math.random() * 100);
//         newArray.push(num);
//     }
// }
//
// randomArray();
// console.log(newArray);

// ----------------------------------------------------------------------

// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let newArray = [];
//
// function randomArray(numberOfCycles) {
//     for (let i = 0; i < numberOfCycles; i++) {
//         let limit = newArray.length;
//         let num = Math.round(Math.random() * limit);
//         newArray.push(num);
//     }
// }
//
// randomArray(10);
// console.log(newArray);

// ----------------------------------------------------------------------

// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let array = [];
// let newArray = [];
//
// function reverseArray() {
//     for (let i = 0; i < 10; i++) {
//         let num = Math.round(Math.random() * 100);
//         array.push(num);
//     }
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i]);
//     }
//
// }
// reverseArray(10, 20, 30, 40, 50)
//
// console.log(array);
// console.log(newArray);