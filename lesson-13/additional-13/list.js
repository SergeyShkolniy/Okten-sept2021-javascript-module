document.body.style.background = 'Lavender';

let allGoods = JSON.parse(localStorage.getItem('allGoods'));

let wrapperGoods = document.createElement('div');
wrapperGoods.style.maxWidth = '1200px';
wrapperGoods.style.display = 'flex';
wrapperGoods.style.flexWrap = 'wrap';
wrapperGoods.style.margin = '0 auto';
wrapperGoods.style.position = 'relative';
wrapperGoods.style.boxSizing = 'border-box';

document.body.append(wrapperGoods);

for (let goods of allGoods) {
    let containerGoods = document.createElement('div');
    containerGoods.style.display = 'flex';
    containerGoods.style.flexDirection = 'column';
    containerGoods.style.maxWidth = '18%';
    containerGoods.style.border = '1px solid grey';
    containerGoods.style.borderRadius = '10px';
    containerGoods.style.padding = '10px';
    containerGoods.style.margin = '10px';
    containerGoods.style.background = 'white';
    containerGoods.style.boxSizing = 'border-box';
    containerGoods.style.boxShadow = '0 1px 2px grey';
    containerGoods.style.cursor = 'pointer';

    wrapperGoods.append(containerGoods);

    let imgGoods = document.createElement('img');
    imgGoods.src = `${goods.imageOfGoods}`;
    imgGoods.style.minHeight = '194px';
    imgGoods.style.marginBottom = '10px';

    let nameGoods = document.createElement('div');
    nameGoods.innerHTML = `<b>${goods.nameOfGoods}</b>`;
    nameGoods.style.fontSize = '20px';
    nameGoods.style.display = 'flex';
    nameGoods.style.justifyContent = 'center';
    nameGoods.style.padding = '5px 10px';


    let numberGoods = document.createElement('div');
    numberGoods.innerHTML = `В наличии: <b>${goods.numberOfGoods}</b> шт.`;
    numberGoods.style.padding = '5px 10px';

    let priceGoods = document.createElement('div');
    priceGoods.innerHTML = `Стоимость: <b>${goods.priceOfGoods}</b> грн.`;
    priceGoods.style.fontSize = '18px';
    priceGoods.style.padding = '5px 10px';

    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Удалить этот товар';
    buttonDelete.style.cursor = 'pointer';

    containerGoods.append(imgGoods, nameGoods, numberGoods, priceGoods, buttonDelete);

    let id = goods.id;

    containerGoods.onmouseover = function () {
        containerGoods.style.boxShadow = '5px 5px 3px grey';
        containerGoods.onmouseout = function () {
            containerGoods.style.boxShadow = '2px 2px 1px grey';
        };
    };

    buttonDelete.onclick = function () {
        allGoods.forEach(function (goods, index) {
            if (goods.id === id) {
                allGoods.splice(index,1);
            }
            localStorage.setItem('allGoods', JSON.stringify(allGoods));
            location.reload();
        });
    }
}

let buttonDeleteAll = document.createElement('button');
buttonDeleteAll.innerText = 'Удалить все товары';
buttonDeleteAll.style.borderRadius = '50px';
buttonDeleteAll.style.position = 'absolute';
buttonDeleteAll.style.left = '-170px';
buttonDeleteAll.style.top = '50px';
buttonDeleteAll.style.padding = '10px';
buttonDeleteAll.style.fontWeight = '700';
buttonDeleteAll.style.cursor = 'pointer';
wrapperGoods.append(buttonDeleteAll);

buttonDeleteAll.onclick = function () {
    allGoods.splice(0, allGoods.length);
    localStorage.setItem('allGoods', JSON.stringify(allGoods));
    location.reload();
};
