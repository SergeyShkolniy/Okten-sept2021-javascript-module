// 1 - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let information = document.getElementsByTagName('body')[0];
//
// information.onclick = function (event) {
//     console.log(`
//     назва тегу: '${event.target.localName}',
//     список класів: '${event.target.classList.value}',
//     список ід: '${event.target.id}',
//     висота: '${event.target.clientHeight}',
//     ширина: '${event.target.clientWidth}'`)
// };

// ----------------------------------------------------------------------

// 2 - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let information = document.getElementsByTagName('body')[0];
// information.style.position = 'relative';
//
// information.onmousedown = function (event) {
//
//     let popup = document.createElement('div');
//     popup.className = 'popup';
//     popup.style.position = 'absolute';
//     popup.style.padding = '15px';
//     popup.style.borderRadius = '15px'
//     popup.style.background = 'LightSalmon';
//     popup.style.top = event.clientY + 'px';
//     popup.style.left = event.clientX + 'px';
//     document.body.append(popup);
//
// let info = `
//     назва тегу: '${event.target.localName}',
//     список класів: '${event.target.classList.value}',
//     список ід: '${event.target.id}',
//     висота: '${event.target.clientHeight}',
//     ширина: '${event.target.clientWidth}'`
//
//     popup.append(info);
//
//     information.onmouseup = function (event) {
//         popup.remove()
//     }
// };

// ----------------------------------------------------------------------

// 3 -- взять массив пользователей
//     - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//     1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//     2й - оставляет старше 29 лет включительно
//     3й - оставляет тех у кого город киев
//     Данные выводить в документ
//
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ]
// console.log(usersWithAddress);
//
//
// let formCheckBox = document.createElement('form');
// formCheckBox.id = 'formCheckBox';
// formCheckBox.style.margin = '20px';
// document.body.append(formCheckBox)
//
// let checkBoxFalse = document.createElement('input');
// checkBoxFalse.type = 'checkbox';
// checkBoxFalse.name = 'checkBoxFalse';
//
// let checkBox29 = document.createElement('input');
// checkBox29.type = 'checkbox';
// checkBox29.name = 'checkBox29';
//
// let checkBoxKyiv = document.createElement('input');
// checkBoxKyiv.type = 'checkbox';
// checkBoxKyiv.name = 'checkBoxKyiv';
//
// formCheckBox.append(checkBoxFalse, checkBox29, checkBoxKyiv)
//
// let wrapper = document.createElement('div');
// wrapper.id = 'wrapper';
// document.body.append(wrapper)
//
// let form = document.forms.formCheckBox;
//
// form.checkBoxFalse.addEventListener('click', checkFalse);
// function checkFalse() {
//     if (this.checked === true) {
//         let sortFalse = usersWithAddress.filter(value => value.status === false);
//         for (let user of sortFalse) {
//             let div = document.createElement('div');
//             div.classList = 'checkFalse';
//             div.innerHTML = `${user.id} ${user.name}${user.age} <b>${user.status}</b> ${user.address.city} ${user.address.street} ${user.address.number}`;
//             wrapper.append(div);
//         }
//     } else {
//         let div = document.getElementsByClassName('checkFalse');
//         for (let d of div) {
//             d.innerHTML = '';
//         }
//     }
// }
//
// form.checkBox29.addEventListener('click', check29);
// function check29() {
//     if (this.checked === true) {
//         let sortFalse = usersWithAddress.filter(value => value.age >= 29);
//         for (let user of sortFalse) {
//             let div = document.createElement('div');
//             div.classList = 'check29';
//             div.innerHTML = `${user.id} ${user.name}<b>${user.age} </b>${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
//             wrapper.append(div);
//         }
//     } else {
//         let div = document.getElementsByClassName('check29');
//         for (let d of div) {
//             d.innerHTML = '';
//         }
//     }
// }
// form.checkBoxKyiv.addEventListener('click', checkKyiv);
// function checkKyiv() {
//     if (this.checked === true) {
//         let sortFalse = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//         for (let user of sortFalse) {
//             let div = document.createElement('div');
//             div.classList = 'checkKyiv';
//             div.innerHTML = `${user.id} ${user.name}${user.age} ${user.status} <b>${user.address.city}</b> ${user.address.street} ${user.address.number}`;
//             wrapper.append(div);
//         }
//     } else {
//         let div = document.getElementsByClassName('checkKyiv');
//         for (let d of div) {
//             d.innerHTML = '';
//         }
//     }
// }

// ----------------------------------------------------------------------

// 4 *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let elementsDom = document.getElementsByClassName('wrapper');
//
// let buttonForward = document.createElement('button');
// buttonForward.innerHTML = 'Вперед';
//
// let buttonBack = document.createElement('button');
// buttonBack.innerHTML = 'Назад';
//
// document.body.append(buttonForward, buttonBack);
//
// let res = [];
//
// function itemSearch (elementsDom) {
//
//     function item (elementDom) {
//         if (elementDom.children.length) {
//             for (element of elementDom.children) {
//                 if (element.children.length) {
//                     item (element)
//                 } else {
//                     res.push(element);
//                 }
//             }
//         }
//     }
//
//     let index = 0;
//
//     buttonForward.onclick = function () {
//         item(elementsDom[0]);
//         console.log(res[index]);
//         ++index;
//     }
//
//     buttonBack.onclick = function () {
//         item(elementsDom[0]);
//         console.log(res[index - 1]);
//         --index;
//     }
// }
// itemSearch(elementsDom);

// ----------------------------------------------------------------------

// 5 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let arrayImages = [
//     'https://www.economiadehoy.es/fotos/8/Moneda2onzasdeplata2_TuvaluFamiliaSimpson2019.Proof._thumb_468.jpg',
//     'https://i.ebayimg.com/images/g/Hv4AAOSweTlcfbZk/s-l1600.png',
//     'https://i.ebayimg.com/images/g/QPsAAOSwKpBc0LVU/s-l1600.png',
//     'https://i.ebayimg.com/images/g/LXMAAOSwWDxdbUl~/s-l1600.png',
//     'https://i.ebayimg.com/images/g/DNYAAOSwVopdGpIa/s-l1600.png',
//     'https://i.ebayimg.com/images/g/grIAAOSws-xdv5Oi/s-l1600.png'
// ];
//
// let wrapper = document.createElement('div');
// wrapper.id = 'carousel';
// wrapper.style.display = 'flex';
// wrapper.style.alignItems = 'center';
// wrapper.style.justifyContent = 'center';
// wrapper.style.columnGap = '25px';
//
// let buttonLeft = document.createElement('button');
// buttonLeft.classList.add('buttonLeft');
// buttonLeft.innerText = 'left';
// buttonLeft.style.width = '50px';
// buttonLeft.style.height = '50px';
// buttonLeft.style.borderRadius = '50%';
// buttonLeft.style.cursor = 'pointer';
//
// let carousel = document.createElement('div');
// carousel.style.width = '900px';
// carousel.style.overflow = 'hidden';
// carousel.style.position = 'relative';
//
//
// let ul = document.createElement('ul');
// ul.style.display = 'flex';
// ul.style.padding = '0px';
// ul.style.width = '1500px';
// ul.style.transition = 'margin-left 250ms;'
// carousel.append(ul)
//
// for (let images of arrayImages) {
//     let li = document.createElement('li');
//     li.style.listStyle = 'none';
//     let img = document.createElement('img');
//     img.src = `${images}`;
//     img.style.width = '300px';
//
//     li.append(img);
//     ul.append(li);
// }
//
// let buttonRight = document.createElement('button');
// buttonRight.classList.add('buttonRight');
// buttonRight.innerText = 'right';
// buttonRight.style.width = '50px';
// buttonRight.style.height = '50px';
// buttonRight.style.borderRadius = '50%';
// buttonRight.style.cursor = 'pointer';
//
// wrapper.append(buttonLeft, carousel, buttonRight);
// document.body.appendChild(wrapper);
//
// let liBlock = wrapper.getElementsByTagName('li');
// let widthImages = '300';
// let position = 0;
//
// let leftButton = wrapper.getElementsByClassName('buttonLeft')[0];
// let rightButton = wrapper.getElementsByClassName('buttonRight')[0];
// let ulBlock = carousel.getElementsByTagName('ul')[0];
//
// leftButton.onclick = function () {
//     position += +widthImages;
//     position = Math.min(position, 0);
//     ulBlock.style.marginLeft = position + 'px';
// };
// rightButton.onclick = function () {
//     position -= widthImages;
//     position = Math.max(position, -widthImages * (liBlock.length - 3));
//     ulBlock.style.marginLeft = position + 'px';
// };

// ----------------------------------------------------------------------

// 6  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// document.onmouseup = function (){
//     if (document.getSelection().toString().length) {
//         let selection = document.getSelection().getRangeAt(0);
//         let selectedContent = selection.extractContents();
//         let span = document.createElement('span');
//         span.style.fontWeight = "bolder";
//         span.style.backgroundColor = "GreenYellow";
//         span.appendChild(selectedContent);
//         selection.insertNode(span);
//     }
// }





