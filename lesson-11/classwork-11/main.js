let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// 1 - є масив -створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


for (let user of users) {
    let wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.columnGap = '15px';
    wrapper.style.marginBottom = '10px';
    document.body.append(wrapper);

    for (let key in user) {
        let item = document.createElement('div');
        item.innerHTML = `${key} : <b>${user[key]}</b>`;
        item.style.width = '100px';
        wrapper.append(item);
    }
    let button = document.createElement('button');
    button.innerText = 'додати до улюблених';
    button.style.borderRadius = '15px';
    button.style.cursor = 'pointer';
    wrapper.append(button);


    let name = `${user.name}`;
    let age = `${user.age}`;
    let status = `${user.status}`;

    button.onclick = function (event) {
        event.preventDefault()

        let allUser = JSON.parse(localStorage.getItem('allUser'));

        if (allUser === null) {
            let user = {name: name, age: age, status: status};
            let arrayUsersFavorite = [];
            arrayUsersFavorite.push(user);

            localStorage.setItem('allUser', JSON.stringify(arrayUsersFavorite));

        } else {
            let user = {name: name, age: age, status: status};
            allUser.push(user);
            localStorage.setItem('allUser', JSON.stringify(allUser));
        }
    }
}
