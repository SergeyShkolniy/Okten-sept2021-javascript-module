let allUser = JSON.parse(localStorage.getItem('allUser'));




for (let user of allUser) {
    let wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.columnGap = '15px';
    wrap.style.marginBottom = '10px';
    document.body.append(wrap);

    for (let key in user) {
        let item = document.createElement('div');
        item.innerHTML = `${key} : <b>${user[key]}</b>`;
        item.style.width = '100px';
        wrap.append(item);
    }
}