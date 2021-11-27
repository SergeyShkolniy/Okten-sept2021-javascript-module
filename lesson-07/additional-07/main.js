// 1 - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//             geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
// }
// }

// function User(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
//
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: addressStreet,
//         suite: addressSuite,
//         city: addressCity,
//         zipcode: addressZipcode,
//         geo: {
//             lat: geoLat,
//             lng: geoLng
//         }
//     };
//     this.phone = phone;
//     this.website = website;
//     this.company = {name: companyName, catchPhrase: companyCatchPhrase, bs: companyBs};
//
// }
//
// let user = new User(
//     1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     'Kulas Light', 'Apt. 556', 'Gwenborough', 92998 - 3874,
//     -37.3159, 81.1496,
//     '1-770-736-8031 x56442', 'hildegard.org',
//     'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
//
// console.log(user);

// ----------------------------------------------------------------------

// 2 -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


// function Tag(titleOfTag, titleOfAction, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
//
//     this.titleOfTag = titleOfTag;
//     this.titleOfAction = titleOfAction;
//     this.titleOfAttrs = [{titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1}, {
//         titleOfAttr: titleOfAttr2,
//         actionOfAttr: actionOfAttr2
//     }];
//
// }
//
// let a = new Tag(
//     'a',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки.',
//     'accesskey',
//     'Активация ссылки с помощью комбинации клавиш.',
//     'coords',
//     'Устанавливает координаты активной области.'
// );
// console.log(a);
// let div = new Tag(
//     'div',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.',
//     'align',
//     'Задает выравнивание содержимого тега <div>.',
//     'title',
//     'Добавляет всплывающую подсказку к содержимому.'
// );
// console.log(div);
// let h1 = new Tag(
//     'h1',
//     'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ',
//     'align',
//     'Определяет выравнивание заголовка.',
// );
// console.log(h1);
// let span = new Tag(
//     'span',
//     'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. ',
// );
// console.log(span);
// let input = new Tag(
//     'input',
//     'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ',
//     'accept',
//     'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
//     'alt',
//     'Альтернативный текст для кнопки с изображением.'
// );
// console.log(input);
// let form = new Tag(
//     'form',
//     'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     'method',
//     'Метод протокола HTTP.',
//     'name',
//     'Имя формы.'
// );
// console.log(form);
// let option = new Tag(
//     'option',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.',
//     'disabled',
//     'Заблокировать для доступа элемент списка.',
//     'label',
//     'Указание метки пункта списка.'
// );
// console.log(option);
// let select = new Tag(
//     'select',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
//     'multiple',
//     'Позволяет одновременно выбирать сразу несколько элементов списка.',
//     'required',
//     'Список обязателен для выбора перед отправкой формы.'
// );
// console.log(select);
