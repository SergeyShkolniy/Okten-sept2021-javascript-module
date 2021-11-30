// Взяти файл template_2.html та працювати в ньому
// Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let elementIdMainHeader = document.getElementById('main_header');
// let addClassElementIDMainHeader = elementIdMainHeader.classList.toggle("september-2021");

// ----------------------------------------------------------------------

// b) робить шириниу елементу ul 400px

// let elementsWidth = document.getElementsByTagName('ul');
//
// for (const elementWidth of elementsWidth) {
//     elementWidth.style.width = '400px';
// }

// ----------------------------------------------------------------------

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let allElementWidth = document.getElementsByClassName('linkList');
//
// for (const elementWidth of allElementWidth) {
//     elementWidth.style.width = '50%';
// }

// ----------------------------------------------------------------------

// d) отримує текст який зберігається в елементі з класом listElement2

// let elementTextClassListElement2 = document.getElementsByClassName('listElement2');
//
// for (const contentClassListElement2 of elementTextClassListElement2) {
//     let content = contentClassListElement2.innerText;
//     console.log(content);
// }

// ----------------------------------------------------------------------

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allElementsLi = document.getElementsByTagName('li');
// for (const elementLi of allElementsLi) {
//     elementLi.style.background = 'grey';
// }

// ----------------------------------------------------------------------

// f) отримує всі елементи 'a' та додає їм клас anchor

// let allElementsA = document.getElementsByTagName('a');
// for (const elementA of allElementsA) {
//     elementA.classList.toggle('anchor');
// }

// ----------------------------------------------------------------------

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let allElementsAFor = document.getElementsByTagName('a');
//
// for (const elementA of allElementsAFor) {
//     if (elementA.innerText === 'link3') {
//         elementA.style.fontSize = '40px';
//     }
// }

// ----------------------------------------------------------------------

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let allElementsAClassXXX = document.getElementsByTagName('a');
//
// for (const elementA of allElementsAClassXXX) {
//     elementA.classList.add(`element_${elementA.innerText}`)
// }

// ----------------------------------------------------------------------
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let color = prompt('Введите цвет на английском');
//
// let allElementsSubHeader = document.getElementsByClassName('sub-header');
// for (const elementSubHeader of allElementsSubHeader) {
//     elementSubHeader.style.background = `${color}`;
// }

// ----------------------------------------------------------------------

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Введите цвет на английском');
//
// let allElementsSubHeader = document.getElementsByClassName('sub-header');
// for (const elementSubHeader of allElementsSubHeader) {
//     if (elementSubHeader.innerText === 'content 2 segment') {
//         elementSubHeader.style.color = `${color}`;
//     }
// }

// ----------------------------------------------------------------------

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('Введите любой текст');
//
// let allElementsContent1 = document.getElementsByClassName('content_1');
// for (const elementContent1 of allElementsContent1) {
//     elementContent1.innerText = `${text}`;
// }

// ----------------------------------------------------------------------

// l) отримати елементи p та змінити їм padding на 20px

// let allElementsP = document.getElementsByTagName('p');
// for (const elementP of allElementsP) {
//     elementP.style.padding = '20px'
// }

// ----------------------------------------------------------------------

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let allElementsClassText2 = document.getElementsByClassName('text2');
// for (const elementClassText2 of allElementsClassText2) {
//     elementClassText2.innerText = 'september-2021';
// }