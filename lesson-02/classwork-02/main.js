// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let one = 55;
// let two = 55;
// console.log(one, two);
//
// if (one > two) {
//     console.log(`Больше первое число ${one}`);
// } else if (one === two) {
//     console.log('Ваши числа одинаковы');
// }
// else {
//     console.log(`Больше второе число ${two}`);
// }

// _________________________________________________________________________________________________________

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apartmentNumber = prompt('Введите номер своей квартиры и узнаете в каком подъезде Вы живете!')
//
// if (apartmentNumber >= 1 && apartmentNumber <= 20) {
//     alert('Поздравляем, Вы живете в первом поъезде!');
// } else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
//     alert('Поздравляем, Вы живете в втором поъезде!');
// } else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
//     alert('Поздравляем, Вы живете в третьем поъезде!');
// }
// else {
//     alert('Такой квартиры в нашем доме нет!');
// }

// _________________________________________________________________________________________________________

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = prompt('Введите число');
//
// if (+number === 10) {
//     alert('ВЕРНО');
// }
// else {
//     alert('НЕВЕРНО');
// }

// _________________________________________________________________________________________________________

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = [];
// console.log(typeof x)
//
// if (typeof x == "number") {
//     console.log('Введен тип данных NUMBER');
// } else if (typeof x == "string") {
//     console.log('Введен тип данных STRING');
// } else if (typeof x == "boolean") {
//     console.log('Введен тип данных BOOLEAN');
// } else if (typeof x == "object") {
//     console.log('Введен тип данных OBJECT');
// }
// else {
//     console.log('ТАКОГО ТИПА ДАННЫХ НЕТ');
// }


// _________________________________________________________________________________________________________

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = prompt("Давайте узнаем идем ли мы сегодня в OKTEN на учебу! Для этого укажите температуру на улице");
//
// if (temperature>=10 && temperature<=22){
//     alert('Ура мы идем учиться!');
// }
// else {
//     alert('Жаль, учимся дома ОНЛАЙН');
// }

// _________________________________________________________________________________________________________

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let ok = confirm('Предлагаем Вам сыграть в нашу БЕЗПРОИГРЫШНУЮ ВИКТОРИНУ с крутыми призами!');
//
// if (ok===true){
//     let prize = prompt('Введите число от 1 до 5 и узнаете свой ВЫИГРЫШ');
//
//     switch (+prize) {
//         case 1:
//             alert('Поздравляем, Вы выиграли ТЕЛФОН !!!');
//             break;
//         case 2:
//             alert('Поздравляем, Вы выиграли МОТОЦИКЛ !!!');
//             break;
//         case 3:
//             alert('Поздравляем, Вы выиграли АВТОМОБИЛЬ !!!');
//             break;
//         case 4:
//             alert('Поздравляем, Вы выиграли КВАРТИРУ !!!');
//             break;
//         case 5:
//             alert('Поздравляем, Вы выиграли ВИДЕО ПРИСТАВКУ PS !!!');
//             break;
//
//         default:
//             alert('Ваше число не верное, укажите число от 1 до 5');
//     }
// } else
//     if (ok===false){
//     alert('Жаль, что Вы не хотите принять участие в нашей ВИКТОРИНЕ');
// }

// _________________________________________________________________________________________________________
