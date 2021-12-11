// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         wrapper.style.display = 'flex';
//         wrapper.style.flexWrap = 'wrap';
//         wrapper.style.maxWidth = '1300px';
//         wrapper.style.margin = '0 auto';
//         wrapper.style.columnGap = '10px';
//         wrapper.style.rowGap = '10px';
//         wrapper.style.justifyContent = 'center';
//         document.body.append(wrapper);
//
//             for (let post of posts) {
//
//                 let container = document.createElement('div');
//                 container.classList.add('container');
//                 container.style.boxSizing = 'border-box';
//                 container.style.padding = '5px';
//                 container.style.width = '19%';
//                 container.style.borderBottom = '1px solid black';
//                 wrapper.append(container);
//
//                 for (let key in post) {
//
//                     let div = document.createElement('div');
//                     div.innerHTML = `${key}: ${post[key]}`;
//                     container.append(div);
//                 }
//             }
//         }
//     );

// ----------------------------------------------------------------------

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            wrapper.style.display = 'flex';
            wrapper.style.flexWrap = 'wrap';
            wrapper.style.maxWidth = '1300px';
            wrapper.style.margin = '0 auto';
            wrapper.style.columnGap = '10px';
            wrapper.style.rowGap = '10px';
            wrapper.style.justifyContent = 'center';
            document.body.append(wrapper);

            for (let comment of comments) {

                let container = document.createElement('div');
                container.classList.add('container');
                container.style.boxSizing = 'border-box';
                // container.style.textAlign = 'justify';
                container.style.padding = '5px';
                container.style.width = '19%';
                container.style.borderBottom = '1px solid black';
                wrapper.append(container);

                for (let key in comment) {

                    let div = document.createElement('div');
                    div.innerHTML = `${key}: ${comment[key]}`;
                    container.append(div);
                }
            }
        }
    );