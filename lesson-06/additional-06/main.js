// 1 - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
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

// ----------------------------------------------------------------------

// 2 - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

//
// let mail = prompt('Введите Вашу электронную почту');
//
// const validMail = (mail) => {
//
//     if (mail === '') {
//         alert('Вы не ввели электронную почту');
//         return false;
//     }
//     let dog = mail.indexOf('@')
//     if (dog === -1) {
//         alert('Вы ввели адресс без знака @');
//         return false;
//     }
//     if (dog < 1) {
//         alert('Вы ничего не ввели до знака @');
//         return false;
//     }
//     if ((mail.charAt(dog - 1) === '.') || (mail.charAt(dog + 1) === '.') || (mail.charAt(dog + 2) === '.')) {
//         alert('Вы ввели адресс в котором . после @ стоит менне чем на 2 символа');
//         return false;
//     }
//     if (mail !== mail.trim()) {
//         return mail.trim();
//     }
//     alert('Поздравляем Вы ввели корректный электронный адрес!')
//     return mail.toLowerCase();
// };
//
// console.log(validMail(mail))


// ----------------------------------------------------------------------
// 3 - відсортувати масив в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray);
//
// let sortModules = coursesArray.filter(value => value.modules).sort((a, b) => b.modules.length - a.modules.length);
//
// console.log(sortModules);

// ----------------------------------------------------------------------

// 4 - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symbol = "о", string = "Астрономия это наука о небесных объектах";
// let count = (string, stringSearch) => {
//     let temp = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === stringSearch) {
//             temp++;
//         }
//     }
//     return temp;
// };
// console.log(count(string, symbol))

// ----------------------------------------------------------------------

// 5 - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let string = "Сила тяжести приложена к центру масс тела";
// let cutString = (string, n) => string.split(' ').splice(0,n).join(' ');
//
// document.writeln(cutString(string, 5));