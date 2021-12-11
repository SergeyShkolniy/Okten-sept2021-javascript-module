// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let wrapper = document.createElement('div');
wrapper.style.maxWidth = '700px';
wrapper.style.margin = '0 auto';
wrapper.style.marginTop = '20px';
document.body.append(wrapper);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

            for (let user of users) {
                let container = document.createElement('div');
                container.style.display = 'flex';
                container.style.justifyContent = 'space-between';
                container.style.background = 'PapayaWhip';
                container.style.border = '1px solid black';
                container.style.padding = '5px 20px';
                wrapper.append(container);

                let userInfo = document.createElement('div');
                userInfo.innerHTML = ` <b>${user.id}: ${user.name}</b>`
                userInfo.style.fontSize = '20px';
                container.append(userInfo);

                let userButton = document.createElement('button');
                userButton.innerText = 'посмотреть все посты пользователя';
                userButton.style.cursor = 'pointer';
                container.append(userButton);

                let userPosts = document.createElement('div');
                userPosts.style.maxWidth = '680px';
                userPosts.style.margin = '0 auto';
                userPosts.style.background = 'Lavender';
                wrapper.append(userPosts);

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {

                            for (let post of posts) {

                                let userWrap = document.createElement('div');
                                userWrap.style.display = 'none';
                                userWrap.style.flexDirection = 'column';
                                userWrap.style.borderBottom = '1px solid black';
                                userPosts.append(userWrap);

                                let userPost = document.createElement('div');
                                userPost.innerHTML = `<b>${post.userId}:${post.id} ${post.title}</b> <br><br> ${post.body}`
                                userPost.style.padding = '10px 20px';
                                userWrap.append(userPost);

                                let postButton = document.createElement('button');
                                postButton.innerText = 'посмотреть все комментарии к данному посту';
                                postButton.style.margin = '0px 150px 10px 150px';
                                postButton.style.cursor = 'pointer';
                                userWrap.append(postButton);

                                let userComments = document.createElement('div');
                                userComments.style.maxWidth = '660px';
                                userComments.style.margin = '0 auto';
                                userComments.style.marginBottom = '10px';
                                userComments.style.background = 'Beige';
                                userWrap.append(userComments);

                                if (user.id === post.userId) {
                                    userButton.addEventListener("click", togglePosts);

                                    function togglePosts() {
                                        if (userWrap.style.display === 'none') {
                                            userWrap.style.display = 'flex';
                                        } else {
                                            userWrap.style.display = 'none';
                                        }
                                    }

                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {

                                                for (let comment of comments) {

                                                    let userComment = document.createElement('div');
                                                    userComment.innerHTML = `<b>${comment.postId}:${comment.id}</b> <br> ${comment.body}`
                                                    userComment.style.padding = '10px 20px';
                                                    userComment.style.display = 'none';
                                                    userComments.append(userComment);

                                                    if (post.id === comment.postId) {
                                                        postButton.addEventListener("click", toggleComments);

                                                        function toggleComments() {
                                                            if (userComment.style.display === 'none') {
                                                                userComment.style.display = 'block';
                                                            } else {
                                                                userComment.style.display = 'none';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        );
                                }
                            }

                        }
                    );
            }
        }
    );