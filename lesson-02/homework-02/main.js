// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt ( 'Введите число от 0 до 59 и узнаете в какой четверти часа оно находится' );
//
// if (time >= 0 && time <16){
//     alert('Ваше число в первой четверти часа');
//     }
//     else if(time > 15 && time <31){
//     alert('Ваше число во второй четверти часа');
//     }
//     else if(time > 30 && time <46){
//     alert('Ваше число в третей четверти часа');
//     }
//     else if(time > 45 && time <60){
//     alert('Ваше число в четвертой четверти часа');
//     }
//
// else {
//     alert('Не верно введено число, в одном часе только 60 минут :)');
// }

// ---------------------------------------------------------------------------------------------------

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt ( 'Введите число от 1 до 31 и узнаете в какую декаду месяца оно входит' );
//
// if (day > 0 && day <11){
//     alert ('Ваше число входит в первую декаду месяца');
//     }
//     else if(day > 10 && day <21){
//     alert('Ваше число входит во вторую декаду месяца');
//     }
//     else if(day > 20 && day <32){
//     alert('Ваше число входит в третью декаду месяца');
//     }
//
// else {
//     alert('Не верно введено число');
// }

// ---------------------------------------------------------------------------------------------------

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('Проверка работоспособности скрипта при "test" равному \r true или false');
// (test === true) ? alert('Выбран вариант true') : alert('Выбран вариант false');


// ---------------------------------------------------------------------------------------------------

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Введите число и узнайте положительное, отрицательное оно либо равно 0');
// (a > 0) ? alert('Ваше число положительное - больше 0') : (a < 0)? alert('Ваше число отрицательное - меньше 0') : alert('Ваше число равно 0');

// let a = 1;
// let result = (a !== 0) ? 'Верно' : 'Неверно';
// console.log(result);
//
// let a0 = 0;
// let result0 = (a0 !== 0) ? 'Верно' : 'Неверно';
// console.log(result0);
//
// let a3 = -3;
// let result3 = (a3 !== 0) ? 'Верно' : 'Неверно';
// console.log(result3);

// ---------------------------------------------------------------------------------------------------

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let ok = confirm('Хотите узнать запланированные дела на текущую неделю?')
//
// if (ok===true){
//     let prize = prompt('Введите число от 1 до 7 и узнаете свои дела на этот день');
//
//     switch (+prize) {
//         case 1:
//             alert('Понедельник: \r 15:00 - посмтреть превью нового урока \r 20:00 - лекция по JavaScript');
//             break;
//         case 2:
//             alert('Вторник: \r 10:00 - выполнение домашней работы \r 17:00 - выполнение классной работы');
//             break;
//         case 3:
//             alert('Среда: \r 15:00 - посмтреть превью нового урока \r 20:00 - лекция по JavaScript');
//             break;
//         case 4:
//             alert('Четверг: \r 10:00 - выполнение домашней работы \r 17:00 - выполнение классной работы');
//             break;
//         case 5:
//             alert('Пятница: \r 15:00 - посмтреть превью нового урока \r 20:00 - лекция по JavaScript');
//             break;
//         case 6:
//             alert('Суббота: \r 11:30 - урок английского языка \r 13:00 - выполнение домашней работы \r 17:00 - выполнение классной работы');
//             break;
//         case 7:
//             alert('Воскресенье \r выходной день, провести его с семьей, но это не повод не позаниматься :)');
//             break;
//
//         default:
//             alert('Ваше число не верное, укажите число от 1 до 7');
//     }
// } else
//     if (ok===false){
//     alert('Жаль, что Вы не хотите узнать запланированные дела на текущую неделю');
// }

// ---------------------------------------------------------------------------------------------------

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt(' Введите текущий год и узнаете высокосный он или нет');
//
// ((year % 4) === 0) ? alert('Высокосный год') : alert('Обычный год');
//


// ---------------------------------------------------------------------------------------------------

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?')
//
// if (question.toLowerCase() === 'ecmascript'){
//     alert('Правильно!')
//     }
// else {
//     alert('Не знаєте? ECMAScript!');
// }

// ---------------------------------------------------------------------------------------------------