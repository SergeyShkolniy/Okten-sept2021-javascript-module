// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
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

            for (let post of posts) {

                let container = document.createElement('div');
                container.classList.add('container');
                container.style.boxSizing = 'border-box';
                container.style.display = 'flex';
                container.style.flexDirection = 'column';
                container.style.position = 'relative';
                container.style.padding = '5px';
                container.style.width = '19%';
                container.style.height = '350px';
                container.style.border = '1px solid black';
                wrapper.append(container);

                for (let key in post) {

                    let div = document.createElement('div');
                    div.innerHTML = `${key}: ${post[key]}`;
                    div.style.margin = '5px 0 5px 0';
                    div.style.height = '100%';
                    container.append(div);
                }

                let buttonComments = document.createElement('button');
                buttonComments.innerHTML = 'все комментарии по посту';
                buttonComments.style.width = '100%';
                buttonComments.style.cursor = 'pointer';
                container.append(buttonComments);

                let wrap = document.createElement('div');
                wrap.classList.add('wrap');
                wrap.style.position = 'absolute';
                wrap.style.top = '350px';
                wrap.style.left = '0px';
                wrap.style.zIndex = '999';

                container.append(wrap);

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {

                        for (let comment of comments) {
                            if (post.id === comment.postId) {
                                buttonComments.addEventListener("click", toggleComments);
                                function toggleComments() {
                                    if (divComments.style.display === 'none') {
                                        divComments.style.display = 'block';
                                    } else {
                                        divComments.style.display = 'none';
                                    }
                                }
                                let divComments = document.createElement('div');
                                divComments.innerHTML = `<b>${comment.postId}:${comment.id}</b> ${comment.body}`;
                                divComments.style.padding = '5px';
                                divComments.style.borderBottom = '1px solid black';
                                divComments.style.display = 'none'
                                divComments.style.background = 'PeachPuff';

                                wrap.append(divComments);
                            }
                        }
                        }
                    );
            }
        }
    );