// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(arrayNumbers);

// -----------------------------------------------------------------------

// 1. перебрати його циклом while

// let i = 0;
// while (i < arrayNumbers.length) {
//     let arrayElement = arrayNumbers[i];
//     console.log(arrayElement)
//     i++
// }

// -----------------------------------------------------------------------

// 2. перебрати його циклом for

// for (let i = 0; i < arrayNumbers.length; i++) {
//     let arrayElement = arrayNumbers[i];
//     console.log(arrayElement)
// }

// -----------------------------------------------------------------------

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arrayNumbers.length) {
//     let arrayElement = arrayNumbers[i];
//     if (i % 2 !== 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
//     i++
// }

// -----------------------------------------------------------------------

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arrayNumbers.length; i++) {
//     let arrayElement = arrayNumbers[i];
//     if (i % 2 !== 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
// }

// -----------------------------------------------------------------------

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < arrayNumbers.length) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 2 === 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
//     i++
// }

// -----------------------------------------------------------------------

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arrayNumbers.length; i++) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 2 === 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
// }

// -----------------------------------------------------------------------

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arrayNumbers.length; i++) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 3 === 0) {
//         arrayElement = 'okten';
//         console.log(arrayElement)
//     }
// }

// -----------------------------------------------------------------------

// 8. вивести масив в зворотньому порядку.

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayElement = arrayNumbers[i];
//     console.log(arrayElement);
// }

// -----------------------------------------------------------------------

// 9. 1. перебрати його циклом while

// let i = arrayNumbers.length - 1;
// while (i >= 0) {
//     let arrayElement = arrayNumbers[i];
//     console.log(arrayElement);
//     i--;
// }

// -----------------------------------------------------------------------

// 9. 2. перебрати його циклом for

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayElement = arrayNumbers[i];
//     console.log(arrayElement)
// }

// -----------------------------------------------------------------------

// 9. 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = arrayNumbers.length - 1;
// while (i >= 0) {
//     let arrayElement = arrayNumbers[i];
//     if (i % 2 !== 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
//     i--
// }

// -----------------------------------------------------------------------

// 9. 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayElement = arrayNumbers[i];
//     if (i % 2 !== 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
// }

// -----------------------------------------------------------------------

// 9. 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = arrayNumbers.length - 1;
// while (i >= 0) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 2 === 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
//     i--
// }

// -----------------------------------------------------------------------

// 9. 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 2 === 0) {
//         console.log(`${i} index = ${arrayElement}`);
//     }
// }

// -----------------------------------------------------------------------

// 9. 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayElement = arrayNumbers[i];
//     if (arrayElement % 3 === 0) {
//         arrayElement = 'okten';
//         console.log(arrayElement)
//     }
// }

// -----------------------------------------------------------------------