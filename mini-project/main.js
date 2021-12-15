document.body.style.background = 'linear-gradient(to top left, powderblue, pink)';
document.body.style.height = '100vh';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.flexWrap = 'wrap';
        wrapper.style.maxWidth = '1200px';
        wrapper.style.margin = '0 auto';
        wrapper.style.marginTop = '30px';
        document.body.appendChild(wrapper);

        for (let user of usersList) {

            let container = document.createElement('div');
            container.classList.add('container');
            container.style.border = 'solid 1px ';
            container.style.width = '40%';
            container.style.margin = '10px';
            container.style.padding = '15px 25px';
            container.style.borderRadius = '5px';
            container.style.boxShadow = '1px 1px 8px grey';
            container.style.backgroundColor = 'white';

            wrapper.appendChild(container);

            let userIdAndName = document.createElement('div');
            userIdAndName.classList.add('userIdAndName');
            userIdAndName.innerHTML = `${user.id}: ${user.name}`;
            userIdAndName.style.fontSize = '22px';

            let userButton = document.createElement('button');
            userButton.innerText = 'детальная информация о клиенте';
            userButton.style.fontSize = '15px';
            userButton.style.marginTop = '5px';
            userButton.style.padding = '5px 15px';
            userButton.style.cursor = 'pointer';

            container.append(userIdAndName, userButton);

            container.onmouseover = function() {
                container.style.backgroundColor = 'MistyRose';
                userIdAndName.style.fontWeight = 'bold';
                container.style.boxShadow = '4px 4px 8px grey';

                container.onmouseout = function() {
                    container.style.backgroundColor = 'white';
                    userIdAndName.style.fontWeight = 'normal';
                    container.style.boxShadow = '1px 1px 8px grey';
                }
            }

            let id = `${user.id}`;
            let name = `${user.name}`;
            let username = `${user.username}`;
            let email = `${user.email}`;
            let address = {
                street: `${user.address.street}`,
                suite: `${user.address.suite}`,
                city: `${user.address.city}`,
                zipcode: `${user.address.zipcode}`,
                geo: {
                    lat: `${user.address.geo.lat}`,
                    lng: `${user.address.geo.lng}`
                }
            };
            let phone = `${user.phone}`;
            let website = `${user.website}`;
            let company = {
                name: `${user.company.name}`,
                catchPhrase: `${user.company.catchPhrase}`,
                bs: `${user.company.bs}`
            };

            userButton.onclick = function(event) {
                event.preventDefault();

                window.open('user-details.html', '_blank')

                let user = {id, name, username, email, address, phone, website, company};

                localStorage.setItem('user', JSON.stringify(user));
            }
        }
    });