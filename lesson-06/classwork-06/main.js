// 1 - Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
//     Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//     let n1 = 'Harry Potter'
//     let n2 = 'Ron Whisley'
//     let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let toNormalize = (string) => string.split('..').join(' ').split('---').join(' ').split('__').map(value => value).join(' ');
//
// console.log(toNormalize(n3));

// ----------------------------------------------------------------------


// 2 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let newArray = [];
//
// const randomNumbers = (num, max) => {
//     for (let i = 0; i < num; i++) {
//         let num = Math.floor(Math.random() * max);
//         newArray.push(num)
//     }
// };
// randomNumbers(10, 100);
// console.log(newArray);

// ----------------------------------------------------------------------

// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arraySort = (a, b) => a - b;
//
// console.log(newArray.sort(arraySort));

// ----------------------------------------------------------------------

// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arrayFilter = (value) => value %2 ===0;
//
// console.log(newArray.filter(arrayFilter));

// ----------------------------------------------------------------------

// 5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const numbersToString = (array) => array.map( value => value).join(' ');
//
// console.log(numbersToString(newArray));

// ----------------------------------------------------------------------

// 6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3, 7, 15, 1];
// console.log(nums);
//
// const sortNums = (direction) => {
//     if (direction === 'ascending') {
//         let ascending = (a, b) => a - b;
//         console.log(nums.sort(ascending));
//     } else if (direction === 'descending') {
//         let descending = (a, b) => b - a;
//         console.log(nums.sort(descending));
//     } else {
//         console.log('errors');
//     }
// }
// sortNums('descending')

// ----------------------------------------------------------------------

// 7 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//7.1 -- відсортувати його за спаданням за monthDuration

// let sortMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration).sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortMonthDuration);

// 7.2 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5) ;
// console.log(filterMonthDuration);

// ----------------------------------------------------------------------

// 8 - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let newString = [];
//     while (str.length) {
//         newString.push(str.substr(0, n));
//         str = str.slice(n);
//         console.log(str);
//     }
//     console.log(newString);
//     return newString.join(' ');
//
// };
//
// document.writeln(cutString('наслаждение', 3))


