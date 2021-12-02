// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
// ];

// 1 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newArrayAddress = [];
// for (let address of users) {
//     newArrayAddress.push(address.address);
// }
// console.log(newArrayAddress);

// ----------------------------------------------------------------------

// 2 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let user of users) {
//     let tagDiv = document.createElement('div');
//     tagDiv.classList.add('wrapper');
//     tagDiv.innerHTML = `<b>${user.name} - ${user.age} - ${user.status} - ${user.address.city} - ${user.address.country} - ${user.address.city} - ${user.address.street} - ${user.address.houseNumber}</b>`;
//     tagDiv.style.padding = '20px';
//     document.body.appendChild(tagDiv);
// }

// ----------------------------------------------------------------------

// 3 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let user of users) {
//     let tagDiv = document.createElement('div');
//     tagDiv.classList.add('wrapper');
//     document.body.appendChild(tagDiv);
//     for (let elements in user) {
//         let element = document.createElement('div');
//         element.classList.add('element');
//         element.innerHTML = `${elements}: ${user[elements]}`;
//         tagDiv.appendChild(element);
//     }
// }

// ----------------------------------------------------------------------

// 4 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let user of users) {
//     let tagDiv = document.createElement('div');
//     tagDiv.style.padding = '10px';
//     tagDiv.classList.add('wrapper');
//     document.body.appendChild(tagDiv);
//
//     let tagDivName = document.createElement('div');
//     tagDivName.classList.add('name');
//     tagDivName.innerText = `${user.name}`
//     tagDiv.appendChild(tagDivName);
//
//     let tagDivAge = document.createElement('div');
//     tagDivAge.classList.add('age');
//     tagDivAge.innerText = `${user.age}`
//     tagDiv.appendChild(tagDivAge);
//
//     let tagDivStatus = document.createElement('div');
//     tagDivStatus.classList.add('status');
//     tagDivStatus.innerText = `${user.status}`
//     tagDiv.appendChild(tagDivStatus);
//
//     let tagUlAddress = document.createElement('ul');
//     tagUlAddress.classList.add('address');
//     tagDiv.appendChild(tagUlAddress);
//
//     let tagLiCity = document.createElement('li');
//     tagLiCity.classList.add('city');
//     tagLiCity.innerText = `${user.address.city}`
//     tagUlAddress.appendChild(tagLiCity);
//
//     let tagLiCountry = document.createElement('li');
//     tagLiCountry.classList.add('country');
//     tagLiCountry.innerText = `${user.address.country}`
//     tagUlAddress.appendChild(tagLiCountry);
//
//     let tagLiStreet = document.createElement('li');
//     tagLiStreet.classList.add('street');
//     tagLiStreet.innerText = `${user.address.street}`
//     tagUlAddress.appendChild(tagLiStreet);
//
//     let tagLiHouseNumber = document.createElement('li');
//     tagLiHouseNumber.classList.add('houseNumber');
//     tagLiHouseNumber.innerText = `${user.address.houseNumber}`
//     tagUlAddress.appendChild(tagLiHouseNumber);
// }


// ----------------------------------------------------------------------

// 5 - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let allH2 = document.getElementsByTagName('h2');
//
// for (let h2 of allH2) {
//     let content = h2.innerText;
//     let tagUl = document.createElement('ul');
//     let idContent = document.getElementById('content');
//     idContent.appendChild(tagUl);
//     let tagLi = document.createElement('li');
//     tagLi.innerHTML = `${content}`;
//     tagUl.appendChild(tagLi);
// }

// ----------------------------------------------------------------------

// 6 -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let classCounter = 1
//
// let tagDiv = document.createElement('div');
// tagDiv.id = 'wrapper'
// document.body.appendChild(tagDiv);
//
// for (let rule of rules) {
//     let tagDivBox = document.createElement('div');
//     tagDivBox.classList.add('rules');
//     tagDivBox.setAttribute('class', 'rules rule' + classCounter);
//     classCounter++
//     tagDiv.appendChild(tagDivBox);
//     let tagH2 = document.createElement('h2');
//     tagH2.innerHTML = `${rule.title}`;
//     tagDivBox.appendChild(tagH2);
//     let tagP = document.createElement('p');
//     tagP.innerHTML = `${rule.body}`;
//     tagDivBox.appendChild(tagP);
// }