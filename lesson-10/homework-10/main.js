// 1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.createElement('div');
// div.id = 'text';
// div.innerText = 'произвольный текст';
//
// let buttonClear = document.createElement('button');
// buttonClear.innerText = 'нажми на меня и текст пропадет';
//
// document.body.append(div, buttonClear);
//
// buttonClear.onclick = function () {
//     let divIdText = document.getElementById('text');
//     divIdText.style.display = 'none';
// };

// ----------------------------------------------------------------------

// 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = 'нажми на меня и я исчезну :)';
//
// document.body.append(button);
//
// button.onclick = function () {
//     button.style.display = 'none';
// };

// ----------------------------------------------------------------------

// 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.createElement('form');
// form.id = 'age';
// document.body.append(form);
//
// let input = document.createElement('input');
// input.name = 'message';
// input.placeholder = 'введите Ваш возраст';
//
// let enter = document.createElement('button');
// enter.innerText = 'подтвердить';
//
// form.append(input, enter);
//
// document.forms.age.onsubmit = function(e) {
//     e.preventDefault();
//     let message = +this.message.value;
//     if (message >= 18) {
//         alert('Вам уже есть 18')
//     } else if (message > 0 && message < 18) {
//         alert('Вам еще нет 18')
//     } else {
//         alert('Ошибка, введите Ваш возраст')
//     }
// }

// ----------------------------------------------------------------------

// 4 - Создайте меню, которое раскрывается/сворачивается при клике

// let itemsMenu = ['home', 'about', 'catalog', 'contact'];
//
// let buttonDropdown = document.createElement('button');
// buttonDropdown.innerText = 'dropdown menu';
// buttonDropdown.style.width = '150px'
// buttonDropdown.style.cursor = 'pointer';
// document.body.appendChild(buttonDropdown);
//
// let menu = document.createElement('div');
// menu.style.display = 'none';
// menu.style.columnGap = '10px';
// document.body.appendChild(menu)
//
// for (let itemMenu of itemsMenu) {
//     let item = document.createElement('div');
//     item.innerText = `${itemMenu}`;
//     menu.appendChild(item);
//
//     item.onmouseover = function() {
//         item.style.color = '#ffa500';
//         item.style.cursor = 'pointer';
//     }
//     item.onmouseout = function() {
//         item.style.color = '#000';
//     }
// }
//
// buttonDropdown.addEventListener("click", toggleDropdown);
//
// function toggleDropdown() {
//     if (menu.style.display === "none") {
//         menu.style.display = "flex";
//     } else {
//         menu.style.display = "none";
//     }
// }

// ----------------------------------------------------------------------

// 5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     { title: 'Первый комментарий', body: '1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, perspiciatis.' },
//     { title: 'Второй комментарий', body: '2 lorem ipsum dolo sit ametiLorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quaerat?' },
//     { title: 'Третий комментарий', body: '3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nobis.' },
//     { title: 'Четвертый комментарий', body: '4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, dolorem.' },
//     { title: 'Пятый комментарий', body: '5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, fuga?' }
// ]
//
// for (let comment of comments) {
//
//     let wrapper = document.createElement('div');
//     wrapper.style.margin = '20px';
//     document.body.appendChild(wrapper);
//
//     let title = document.createElement('div');
//     title.innerText = `${comment.title}`;
//
//     let body = document.createElement('div');
//     body.innerText = ` ${comment.body}`;
//     body.style.display = 'none';
//
//     let button = document.createElement('button');
//     button.innerText = 'прочитать комментарий'
//
//     button.addEventListener("click", toggleComment);
//
//     function toggleComment() {
//         if (body.style.display === "none") {
//             body.style.display = "block";
//         } else {
//             body.style.display = "none";
//         }
//     }
//
//     wrapper.append(title, body, button)
//
// }