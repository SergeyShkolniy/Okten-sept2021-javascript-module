document.body.style.background = 'linear-gradient(to top left, powderblue, pink)';
document.body.style.backgroundRepeat = 'repeat';
document.body.style.minHeight = '100vh';

let user = JSON.parse(localStorage.getItem('user'));

let wrapper = document.createElement('div');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.maxWidth = '1200px';
wrapper.style.margin = '0 auto';
wrapper.style.marginTop = '20px';
document.body.append(wrapper);

let container = document.createElement('div');
container.style.border = 'solid 1px ';
container.style.minWidth = '40%';
container.style.padding = '10px 20px';
container.style.position = 'relative';
container.style.borderRadius = '10px';
container.style.boxShadow = '1px 1px 8px grey';
container.style.background = 'linear-gradient(to right, #f7f8f8, #acbb78)';

let avatar = document.createElement('img');
avatar.src = 'https://apartila.com/images/default_avatar.png';
avatar.style.position = 'absolute';
avatar.style.maxWidth = '25%';
avatar.style.right = '20px';
avatar.style.top = '20px';
avatar.style.borderRadius = '10px';
avatar.style.boxShadow = '1px 1px 8px grey';
container.append(avatar);

wrapper.append(container);

for (const userKey in user) {

    if (typeof user[userKey] !== "object") {
        let item = document.createElement('div');
        item.classList.add(`${userKey}`);
        item.innerHTML = `${userKey}: <b>${user[userKey]}</b>`;
        item.style.fontSize = '16px';
        item.style.letterSpacing = '1.2px';
        item.style.paddingLeft = '10px';
        container.appendChild(item);

    } else {
        let itemObject = document.createElement('div');
        itemObject.classList.add(`${userKey}`)
        itemObject.innerText = `${userKey}:`
        itemObject.style.fontSize = '16px';
        itemObject.style.letterSpacing = '1.2px';
        itemObject.style.paddingLeft = '10px';
        container.appendChild(itemObject);

        for (const keyObject in user[userKey]) {
            if (typeof user[userKey][keyObject] !== "object") {
                let item2 = document.createElement('div');
                item2.classList.add(`${keyObject}`);
                item2.innerHTML = `${keyObject}: <b>${user[userKey][keyObject]}</b>`;
                item2.style.paddingLeft = '30px';
                itemObject.appendChild(item2);

            } else {
                let itemObject2 = document.createElement('div');
                itemObject2.classList.add(`${keyObject}`);
                itemObject2.innerText = `${keyObject}:`
                itemObject2.style.paddingLeft = '50px'
                itemObject.appendChild(itemObject2);

                for (const keyObject2 in user[userKey][keyObject]) {
                    if (typeof user[userKey][keyObject][keyObject2] !== "object") {
                        let item3 = document.createElement('div');
                        item3.classList.add(`${keyObject2}`);
                        item3.innerHTML = `${keyObject2}: <b>${user[userKey][keyObject][keyObject2]}</b>`;
                        item3.style.paddingLeft = '20px';
                        item3.style.paddingBottom = '5px';
                        itemObject2.appendChild(item3);

                    } else {
                        let itemObject3 = document.createElement('div');
                        itemObject3.classList.add(`${keyObject2}`);
                        itemObject3.innerText = `${keyObject2}:`
                        itemObject3.style.paddingLeft = '50px'
                        itemObject2.appendChild(itemObject3);

                    }
                }
            }
        }
    }
}

let userButton = document.createElement('button');
userButton.innerHTML = `посмотреть все посты  <b>${user.name}</b>`;
userButton.style.fontSize = '16px';
userButton.style.cursor = 'pointer';
userButton.style.minWidth = '90%';
userButton.style.margin = '20px 0 0 0 ';
userButton.style.padding = '10px 0';
userButton.style.borderRadius = '5px';
userButton.style.boxShadow = '1px 1px 8px grey';
userButton.style.zIndex = '10';
wrapper.append(userButton);

let userPosts = document.createElement('div');
userPosts.style.width = '100%';
userPosts.style.marginBottom = '20px';
userPosts.style.display = 'flex';
userPosts.style.justifyContent = 'space-around';
userPosts.style.flexWrap = 'wrap';
userPosts.style.background = 'Lavender';
userPosts.style.boxShadow = '1px 1px 8px grey';
userPosts.style.borderRadius = '10px';
userPosts.style.padding = '0 10px';

wrapper.append(userPosts);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        for (let post of posts) {

            if (user.id == post.userId) {

                let userWrap = document.createElement('div');
                userWrap.style.display = 'none';
                userWrap.style.flexDirection = 'column';
                userWrap.style.width = '19%';
                userWrap.style.margin = '20px 5px';
                userWrap.style.paddingBottom = '5px';
                userWrap.style.background = 'white';
                userWrap.style.borderRadius = ' 0 10px 10px 10px';

                userPosts.append(userWrap);

                userWrap.onmouseover = function() {
                    userWrap.style.boxShadow = '2px 2px 8px grey';

                    userWrap.onmouseout = function() {
                        userWrap.style.boxShadow = 'none';
                    }
                }

                let userPost = document.createElement('div');
                userPost.innerHTML = `<b>${post.userId}:${post.id} <br>${post.title}</b> `
                userPost.style.padding = '20px';
                userPost.style.height = '70%';

                userWrap.append(userPost);

                let postButton = document.createElement('button');
                postButton.innerText = 'детальная информация';
                postButton.style.margin = '0 auto';
                postButton.style.marginBottom = '10px';
                postButton.style.padding = '5px 15px';
                postButton.style.boxShadow = '1px 1px 8px grey';
                postButton.style.cursor = 'pointer';
                userWrap.append(postButton);

                userButton.addEventListener("click", togglePosts);

                function togglePosts() {
                    if (userWrap.style.display === 'none') {
                        userWrap.style.display = 'flex';
                    } else {
                        userWrap.style.display = 'none';
                    }
                }

                let userId = `${post.userId}`;
                let id = `${post.id}`;
                let title = `${post.title}`;
                let body = `${post.body}`;

                postButton.onclick = function(event) {
                    event.preventDefault();

                    window.open('post-details.html', '_blank')

                    let post = {userId, id, title, body};

                    localStorage.setItem('post', JSON.stringify(post));
                }
            }
        }
    });