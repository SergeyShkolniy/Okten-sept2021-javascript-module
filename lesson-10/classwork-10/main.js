// 1 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let wrapper = document.createElement('div');
// wrapper.style.display = 'flex';
// wrapper.style.flexDirection = 'column';
// wrapper.style.alignItems = 'center';
//
// document.body.append(wrapper);
//
// let form1 = document.createElement('form');
// form1.id = 'form1';
// form1.style.margin = '15px';
// wrapper.append(form1);
//
// let inputName = document.createElement('input');
// inputName.name = 'name';
// inputName.type = 'text';
// inputName.placeholder = 'введите Ваше имя'
// inputName.style.marginRight = '10px';
//
// let inputAge = document.createElement('input');
// inputAge.name = 'age';
// inputAge.type = 'number';
// inputAge.placeholder = 'введите Ваш возраст'
//
// form1.append(inputName, inputAge);
//
// let form2 = document.createElement('form');
// form2.id = 'form2';
// form2.style.margin = '15px';
// wrapper.append(form2);
//
// let inputLastName = document.createElement('input');
// inputLastName.name = 'lastName';
// inputLastName.type = 'text';
// inputLastName.placeholder = 'введите Вашу фамилию';
// inputLastName.style.marginRight = '10px';
//
// let inputTel = document.createElement('input');
// inputTel.name = 'tel';
// inputTel.type = 'number';
// inputTel.placeholder = 'введите Ваш телефон';
//
// form2.append(inputLastName, inputTel);
//
// let button = document.createElement('button');
// button.innerText = 'подтвердить';
// wrapper.append(button);
//
// button.addEventListener('click', clientInformation);
//
// function clientInformation() {
//     let name = document.forms.form1.name.value;
//     let age = document.forms.form1.age.value;
//     let lastName = document.forms.form2.lastName.value;
//     let tel = document.forms.form2.tel.value;
//     console.log(name, lastName, age, tel);
// }

// ----------------------------------------------------------------------

// 2- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let form = document.createElement('form');
// form.id = 'form';
// document.body.append(form);
//
// let inputTr = document.createElement('input');
// inputTr.name = 'tr';
// inputTr.type = 'number';
// inputTr.placeholder = 'количество рядков'
// inputTr.style.marginRight = '10px';
//
// let inputTd = document.createElement('input');
// inputTd.name = 'td';
// inputTd.type = 'number';
// inputTd.placeholder = 'количество ячеек'
// inputTd.style.marginRight = '10px';
//
// let inputText = document.createElement('input');
// inputText.name = 'content';
// inputText.type = 'text';
// inputText.placeholder = 'текст в ячейке'
// inputText.style.marginRight = '10px';
//
// let button = document.createElement('button');
// button.innerText = 'сформировать таблицу';
//
// form.append(inputTr, inputTd, inputText, button);
//
// button.addEventListener('click', generateTable);
//
// function generateTable(e) {
//     e.preventDefault();
//
//     let tegTr = document.forms.form.tr.value;
//     let tegTd = document.forms.form.td.value;
//     let contentCell = document.forms.form.content.value;
//
//     let table = document.createElement('table');
//
//     for (let i = 0; i < tegTr; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//         for (let j = 0; j < tegTd; j++) {
//             let td = document.createElement('td');
//             td.innerText = contentCell;
//             td.style.border = '1px solid black';
//             td.style.padding = '10px';
//             tr.append(td);
//         }
//     }
//     document.body.append(table);
// }

// ----------------------------------------------------------------------

// 3 - Сворити масив не цензцрних слів. Сворити інпут текстового типу. Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням. Перевірку робити при натисканні на кнопку

// let stopList = ['козел', 'лох', 'дурак' ];
//
// let form = document.createElement('form');
// form.name = 'stopList';
// document.body.append(form);
//
// let input = document.createElement('input');
// input.name = 'message';
// input.type = 'text';
// input.placeholder = 'Введите слово а мы его проверим';
// input.style.width = '250px';
// input.style.padding = '10px';
// input.style.marginRight = '10px'
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'проверить';
// button.style.padding = '10px';
// form.appendChild(button);
//
// document.forms.stopList.onsubmit = function() {
//     let message = this.message.value;
//     for (let stop of stopList) {
//         if (message === stop) {
//             alert('Вы ввели запрещенное слово!!!')
//         } else {
//             console.log(message)
//         }
//     }
// }

// ----------------------------------------------------------------------

// 4 - Сворити масив не цензцрних слів. Сворити інпут текстового типу. Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить. Перевірку робити при натисканні на кнопку

// let stopList = ['какашка', 'козел', 'дурак'];
//
// let form = document.createElement('form');
// form.name = 'stopList';
// document.body.append(form);
//
// let input = document.createElement('input');
// input.name = 'message';
// input.type = 'text';
// input.placeholder = 'Введите слово а мы его проверим';
// input.style.width = '350px';
// input.style.padding = '10px';
// input.style.marginRight = '10px'
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'проверить';
// button.style.padding = '10px';
// form.appendChild(button);
//
// document.forms.stopList.onsubmit = function (e) {
//     e.preventDefault();
//     let message = this.message.value;
//     let arrayMess = message.split(' ');
//     for (let stop of stopList) {
//         for (let mes of arrayMess) {
//             if (mes === stop) {
//                 alert(`в Вашем предложении присутствуют запрещенные слово ${mes}`);
//             }
//         }
//     }
// }