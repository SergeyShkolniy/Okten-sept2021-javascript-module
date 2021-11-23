// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let smallestNumber = ( one, two, three) => {
//     let result = (one <= two && one <= three) ? 'Первое число наименьшее' : ( two <= one && two <= three ) ? 'Второе число наименьшее' : 'Третье число наименьшее';
//     return result;
//
// }
// console.log (smallestNumber(5, 100, 10));

// ----------------------------------------------------------------------

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let greatestNumber = ( one, two, three) => {
//     let result = (one >= two && one >= three) ? 'Первое число наибольшее' : ( two >= one && two >= three ) ? 'Второе число наибольшее' : 'Третье число наибольшее';
//     return result;
// }
// console.log(greatestNumber(50, 100, 10));

// ----------------------------------------------------------------------

// 3 - створити функцію яка повертає найбільше число з масиву

// let returnsTheLargestNumber = (array) => {
//
//     let largest = array[0];
//     for (let num of array) {
//         if (num > largest) {
//             largest = num;
//         }
//     }
//     return largest;
// }
//
// console.log(returnsTheLargestNumber([10, 200, 30, 40, 50]));

// ----------------------------------------------------------------------

// 4 - створити функцію яка повертає найменьше число з масиву

// let returnsTheSmallestNumber = (array) => {
//
//     let smallest = array[0];
//     for (let num of array) {
//         if (num < smallest) {
//             smallest = num;
//         }
//     }
//     return smallest;
// }
//
// console.log(returnsTheSmallestNumber([10, 200, 3, 40, 50]));

// ----------------------------------------------------------------------

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summationArray = (array) => {
//     let result = 0;
//     for (let num of array) {
//         result += num;
//     }
//     return result;
// }
//
// console.log(summationArray([10, 20, 30, 40, 50]));

// ----------------------------------------------------------------------

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let averageArray = (array) => {
//     let sum = 0;
//     for (let element of array) {
//         sum += element;
//     }
//     let average = sum / array.length;
//
//     return average;
// }
//
// console.log(averageArray([10, 20, 30, 40, 50]));

// ----------------------------------------------------------------------

// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let smallAndBigNumber = (...array) => {
//
//     let small = array[0];
//     let big = array[0];
//
//     for (let element of array) {
//         if (element < small) {
//             small = element;
//         } else if (element > big) {
//             big = element
//         }
//     }
//     console.log( `наибольшее ${big}`);
//     return small;
// }
//
// console.log(`наименьшее ${smallAndBigNumber(100, 20, 30, 40, 50)}`);

// ----------------------------------------------------------------------

// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let newArray = [];
//
// let randomArray = () => {
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
// let randomArray = (numberOfCycles) => {
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
// let reverseArray = () => {
//     for (let i = 0; i < 10; i++) {
//         let num = Math.round(Math.random() * 100);
//         array.push(num);
//     }
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i]);
//     }
//
// }
// reverseArray()
//
// console.log(array);
// console.log(newArray);






