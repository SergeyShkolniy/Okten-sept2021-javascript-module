// 1 - Все робити за допомоги js.

// - створити блок,
let tagDiv = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
tagDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
tagDiv.style.fontSize = '20px';
tagDiv.style.color = 'blue';
tagDiv.style.background = 'orange';

// - додати цей блок в body.
document.body.appendChild(tagDiv);

// - клонувати його повністю, та додати клон в body.
let tegDivClone = tagDiv.cloneNode(true);
document.body.appendChild(tegDivClone);

// ----------------------------------------------------------------------

// 2 - Є масив:['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menuItems = ['Main', 'Products', 'About us', 'Contacts'];

for (let menuItem of menuItems) {
    let elementsClassMenu = document.getElementsByClassName('menu');
    let tagLi = document.createElement('li');
    tagLi.innerText = menuItem;
    elementsClassMenu[0].appendChild(tagLi)
}

// ----------------------------------------------------------------------

// 3 - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let item of coursesAndDurationArray) {
    let block = document.createElement('div');
    document.body.appendChild(block);
    block.innerText = `Курс ${item.title} длится ${item.monthDuration} месяцев`;
}

// ----------------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let item of coursesAndDurationArray) {

    let elementDiv = document.createElement('div');
    elementDiv.classList.add('item')
    document.body.appendChild(elementDiv);

    let elementH1 = document.createElement('h1');
    elementH1.classList.add('heading');
    elementH1.innerText = item.title;

    let elementP = document.createElement('p');
    elementP.classList.add('description');
    elementP.innerText = item.monthDuration;

    let items = document.body.getElementsByClassName('item');
    for (let item of items) {
        item.appendChild(elementH1);
        item.appendChild(elementP);
    }
}