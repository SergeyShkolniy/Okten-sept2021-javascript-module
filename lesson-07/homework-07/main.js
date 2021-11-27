// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(userId, userName, userSurname, userEmail, userPhone) {
//
//     this.userId = userId;
//     this.userName = userName;
//     this.userSurname = userSurname;
//     this.userEmail = userEmail;
//     this.userPhone = userPhone;
// }
//
// let arrayUsers = [];
//
// arrayUsers.push(user1 = new User(1, 'Sergey', 'Shkolniy', 's.shkolniy@gmail.com', '067 777 25 15'));
// arrayUsers.push(user2 = new User(2, 'Ivan', 'Ivanov', 's.shkolniy@gmail.com', '067 888 25 15'));
// arrayUsers.push(user3 = new User(3, 'Petro', 'Petrov', 's.shkolniy@gmail.com', '067 333 25 15'));
// arrayUsers.push(user4 = new User(4, 'Stepan', 'Sokolov', 's.shkolniy@gmail.com', '067 111 25 15'));
// arrayUsers.push(user5 = new User(5, 'Evgeniy', 'Shkolniy', 's.shkolniy@gmail.com', '067 222 25 15'));
// arrayUsers.push(user6 = new User(6, 'Slavik', 'Sidorov', 's.shkolniy@gmail.com', '067 555 25 15'));
// arrayUsers.push(user7 = new User(7, 'Georg', 'Kurilov', 's.shkolniy@gmail.com', '067 666 25 15'));
// arrayUsers.push(user8 = new User(8, 'Kostya', 'Krot', 's.shkolniy@gmail.com', '067 444 25 15'));
// arrayUsers.push(user9 = new User(9, 'Dima', 'Orel', 's.shkolniy@gmail.com', '067 999 25 15'));
// arrayUsers.push(user10 = new User(10, 'Leonid', 'Orlov', 's.shkolniy@gmail.com', '067 000 25 15'));
//
// console.log(arrayUsers);

// ----------------------------------------------------------------------

// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayUsersFilter = arrayUsers.filter(arrayUsers => arrayUsers.userId % 2 === 0);
// console.log(arrayUsersFilter);

// ----------------------------------------------------------------------

// 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrayUsersSort = arrayUsers.filter(arrayUsers => arrayUsers.userId).sort((a, b) => b.userId - a.userId);
// console.log(arrayUsersSort);

// ----------------------------------------------------------------------

// 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(userId, userName, userSurname, userEmail, userPhone, userOrder = []) {
//         this.userId = userId;
//         this.userName = userName;
//         this.userSurname = userSurname;
//         this.userEmail = userEmail;
//         this.userPhone = userPhone;
//         this.userOrder = userOrder;
//     }
// }
//
// let arrayClients = [];
//
// arrayClients.push(user1 = new Client(1, 'Sergey', 'Shkolniy', 's.shkolniy@gmail.com', '067 777 25 15', ['phone', 'watch', 'bag']));
// arrayClients.push(user2 = new Client(2, 'Ivan', 'Ivanov', 's.shkolniy@gmail.com', '067 888 25 15', ['phone', 'watch']));
// arrayClients.push(user3 = new Client(3, 'Petro', 'Petrov', 's.shkolniy@gmail.com', '067 333 25 15', ['bag']));
// arrayClients.push(user4 = new Client(4, 'Stepan', 'Sokolov', 's.shkolniy@gmail.com', '067 111 25 15', ['mail', 'notebook']));
// arrayClients.push(user5 = new Client(5, 'Evgeniy', 'Shkolniy', 's.shkolniy@gmail.com', '067 222 25 15', ['laptop', 'tablet']));
// arrayClients.push(user6 = new Client(6, 'Slavik', 'Sidorov', 's.shkolniy@gmail.com', '067 555 25 15', ['bread', 'milk', 'bag']));
// arrayClients.push(user7 = new Client(7, 'Georg', 'Kurilov', 's.shkolniy@gmail.com', '067 666 25 15', ['bread']));
// arrayClients.push(user8 = new Client(8, 'Kostya', 'Krot', 's.shkolniy@gmail.com', '067 444 25 15', ['auto', 'key', ]));
// arrayClients.push(user9 = new Client(9, 'Dima', 'Orel', 's.shkolniy@gmail.com', '067 999 25 15', ['pen', 'pencil', 'bag']));
// arrayClients.push(user10 = new Client(10, 'Leonid', 'Orlov', 's.shkolniy@gmail.com', '067 000 25 15', ['pencil', 'bread', 'phone', 'bag']));
//
// console.log(arrayClients);

// ----------------------------------------------------------------------

// 5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let arrayClientsSort = arrayClients.filter(arrayClients => arrayClients.userOrder).sort((a, b) => a.userOrder.length - b.userOrder.length);
// console.log(arrayClientsSort);

