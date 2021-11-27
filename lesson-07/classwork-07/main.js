// 1 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxSpeed} км на годину`)
//     };
//     this.info = function () {
//         console.log(`
//         Інформацію про автомобіль:
//
//             model - ${model}
//             manufacturer - ${manufacturer}
//             year - ${year}
//             maxSpeed - ${maxSpeed}
//             engineVolume - ${engineVolume}
//         `);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(`Нова максимальна швидкість ${maxSpeed = newSpeed} км на годину`)
//     };
//     this.changeYear = function (newYear) {
//         console.log(`Рік випуску змінено на ${year = newYear} `)
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let driver = {name: 'Sergey', surname: 'Shkolniy', age: 37, drivingExperience: 10}
// let auto = new Car('Z350', 'Nissan', 2017, 257, 3200)
//
// console.log(auto);
// auto.drive();
// auto.info();
// auto.increaseMaxSpeed(50);
// auto.changeYear(2021);
// auto.addDriver(driver);

// ----------------------------------------------------------------------

// 2 - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     };
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     };
//     info  () {
//         console.log(`
//         Інформацію про автомобіль:
//
//             model - ${this.model}
//             manufacturer - ${this.manufacturer}
//             year - ${this.year}
//             maxSpeed - ${this.maxSpeed}
//             engineVolume - ${this.engineVolume}
//         `);
//     };
//     increaseMaxSpeed (newSpeed) {
//         console.log(`Нова максимальна швидкість ${this.maxSpeed += newSpeed} км на годину`)
//     };
//     changeYear (newYear) {
//         console.log(`Рік випуску змінено на ${this.year = newYear} `)
//     };
//     addDriver (driver) {
//         this.driver = driver;
//     };
// }
// let driver = {name: 'Sergey', surname: 'Shkolniy', age: 37, drivingExperience: 10}
// let auto = new Car('Z350', 'Nissan', 2017, 257, 3200)
//
// console.log(auto);
// auto.drive();
// auto.info();
// auto.increaseMaxSpeed(50);
// auto.changeYear(2021);
// auto.addDriver(driver);

// ----------------------------------------------------------------------

// 3 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(cinderellaName, cinderellaAge, cinderellaFootSize) {
//
//     this.cinderellaName = cinderellaName;
//     this.cinderellaAge = cinderellaAge;
//     this.cinderellaFootSize = cinderellaFootSize;
//
// }
//
// let cinderellas = [];
//
// cinderellas.push(cinderella1 = new Cinderella('Liza', 25, 37));
// cinderellas.push(cinderella2 = new Cinderella('Tanya', 17, 36));
// cinderellas.push(cinderella3 = new Cinderella('Alena', 24, 38));
// cinderellas.push(cinderella4 = new Cinderella('Vika', 31, 38));
// cinderellas.push(cinderella5 = new Cinderella('Valya', 40, 36));
// cinderellas.push(cinderella6 = new Cinderella('Lena', 38, 39));
// cinderellas.push(cinderella7 = new Cinderella('Tonya', 18, 37));
// cinderellas.push(cinderella8 = new Cinderella('Alla', 22, 40));
// cinderellas.push(cinderella9 = new Cinderella('Nadya', 27, 35));
// cinderellas.push(cinderella10 = new Cinderella('Aleksandra', 21, 38));
//
// console.log(cinderellas);
//
// class Prince {
//     constructor(princeName, princeAge, princeFootSize) {
//
//         this.princeName = princeName;
//         this.princeAge = princeAge;
//         this.princeFootSize = princeFootSize;
//
//     };
// }
//
// let princes = [];
//
// princes.push(prince1 = new Prince('Sergey', 38, 38));
// princes.push(prince2 = new Prince('Ivan', 25, 35));
// princes.push(prince3 = new Prince('Stepan', 24, 40));
// princes.push(prince4 = new Prince('Kostya', 30, 37));
// princes.push(prince5 = new Prince('Kirill', 35, 39));
// princes.push(prince6 = new Prince('Dima', 35, 36));
// princes.push(prince7 = new Prince('Vova', 41, 38));
// princes.push(prince8 = new Prince('Leonid', 25, 38));
// princes.push(prince9 = new Prince('Alexey', 21, 336));
// princes.push(prince0 = new Prince('Aleksandr', 35, 37));
//
// console.log(princes);
//
// for (let cinderella of cinderellas) {
//     for (let prince of princes) {
//         if (prince.princeFootSize === cinderella.cinderellaFootSize) {
//             prince.wife = cinderella;
//         }
//     }
// }
//
// console.log(princes);