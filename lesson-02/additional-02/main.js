// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// console.log(friends.length);
//
// let result = (friends.length >= 3) ? 'Этот массив большой в котором болле 3 элементов' : 'Этот массив маленький в котором менее 3 элементов';
//
// console.log(result);

// -------------------------------------------------------------------------------------------------

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let one = 0;
// let two = 1000;
// let three = 2000;
// console.log(one, two, three);
//
// let result = ( (one > two) && (one < three) ) ? 'Первое число среднее' : ( (two > one) && (two < three) ) ? 'Второе число среднее' : 'Третье число среднее';
//
// console.log(result);

// -------------------------------------------------------------------------------------------------

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 3;
// let b = 2;
//
// let result = ((a + b) < 4) ? 'Мало' : ((a + b) === 4) ? 'Рівно' : 'Багато';
//
// console.log(result);

// -------------------------------------------------------------------------------------------------

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let num = 100;
//
// let result = ( num > 0 ) ? 'Число положительное' : ( num < 0 ) ? 'Число отрицательное' : 'Ваше число 0';
//
// console.log(result);

// -------------------------------------------------------------------------------------------------