document.body.style.background = 'linear-gradient(to top left, powderblue, pink)';
document.body.style.height = '100vh';

let post = JSON.parse(localStorage.getItem('post'));

let wrapper = document.createElement('div');
wrapper.style.width = '1200px';
wrapper.style.margin = '0 auto';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.marginTop = '10px';
document.body.append(wrapper);

let container = document.createElement('div');
container.style.width = '90%';
container.style.padding = '10px 20px';
container.style.borderRadius = '5px';
container.style.boxShadow = '1px 1px 8px grey';
container.style.background = 'Lavender';
container.style.zIndex = '2';
wrapper.append(container);

let userComments = document.createElement('div');
userComments.style.maxWidth = '85%';
userComments.style.display = 'flex';
userComments.style.flexWrap = 'wrap';
userComments.style.justifyContent = 'space-between';
userComments.style.boxShadow = '1px 1px 8px grey';
userComments.style.padding = '20px 10px';
userComments.style.marginBottom = '10px';
userComments.style.background = 'Beige';
userComments.style.borderRadius = '0 0 10px 10px';

wrapper.append(userComments);

for (const userKey in post) {

    let item = document.createElement('div');
    item.classList.add(`${userKey}`);
    item.innerHTML = `${userKey}: <b>${post[userKey]}</b>`;
    item.style.fontSize = '16px';
    item.style.paddingLeft = '10px';
    item.style.paddingBottom = '10px';
    container.appendChild(item);

}

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {

        for (let comment of comments) {

            if (post.id == comment.postId) {
                let userComment = document.createElement('div');
                userComment.innerHTML = `<b>${comment.postId} : ${comment.id}</b> <br><br>  ${comment.email}<br><b>${comment.name}</b><br><br>${comment.body}`
                userComment.style.padding = '10px';
                userComment.style.margin = '10px';
                userComment.style.maxWidth = '20%';
                userComment.style.textAlign = 'justify';
                // userComment.style.borderBottom = '1px solid black';
                userComment.style.borderRadius = '0 15px 15px 15px';
                userComment.style.boxShadow = '1px 1px 8px grey';
                userComment.style.background = 'white';
                userComments.append(userComment);

            }
        }
    });