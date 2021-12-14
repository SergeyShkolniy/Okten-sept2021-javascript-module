document.body.style.background = 'Lavender';

let wrapper = document.createElement('div');
wrapper.style.maxWidth = '30%';
wrapper.style.margin = '0 auto';
wrapper.style.marginTop = '100px';
wrapper.style.padding = '20px';
wrapper.style.background = 'Bisque';
wrapper.style.border = '1px solid grey';
wrapper.style.borderRadius = '10px';
wrapper.style.boxShadow = '2px 2px 1px grey';

document.body.append(wrapper);

let formProducts = document.createElement('form');
formProducts.name = 'formProducts';
wrapper.append(formProducts);

let nameForm = document.createElement('legend');
nameForm.innerText = 'Наполнение интернет магазина товарами';
nameForm.style.fontSize = '20px';
nameForm.style.fontWeight = '900';
nameForm.style.textAlign = 'center';
nameForm.style.padding = '20px';
formProducts.append(nameForm);

let labelNameOfGoods = document.createElement('label');
labelNameOfGoods.htmlFor = 'inputNameGoods';
labelNameOfGoods.innerText = 'Название товара';
labelNameOfGoods.style.fontWeight = '700';

let inputNameOfGoods = document.createElement('input');
inputNameOfGoods.name = 'inputNameOfGoods';
inputNameOfGoods.placeholder = 'название данного товара';
inputNameOfGoods.required = true;
inputNameOfGoods.maxLength = 20;
inputNameOfGoods.style.width = '100%';
inputNameOfGoods.style.padding = '10px';
inputNameOfGoods.style.boxSizing = 'border-box';
inputNameOfGoods.style.margin = '5px 0 15px 0';

labelNameOfGoods.append(inputNameOfGoods);

let labelNumberOfGoods = document.createElement('label');
labelNumberOfGoods.htmlFor = 'inputNumberOfGoods';
labelNumberOfGoods.innerText = 'Количество товара';
labelNumberOfGoods.style.fontWeight = '700';

let inputNumberOfGoods = document.createElement('input');
inputNumberOfGoods.name = 'inputNumberOfGoods';
inputNumberOfGoods.type = 'number';
inputNumberOfGoods.required = true;
inputNumberOfGoods.maxLength = 10;
inputNumberOfGoods.placeholder = 'количество данного товара';
inputNumberOfGoods.style.width = '100%';
inputNumberOfGoods.style.padding = '10px';
inputNumberOfGoods.style.boxSizing = 'border-box';
inputNumberOfGoods.style.margin = '5px 0 15px 0';

labelNumberOfGoods.append(inputNumberOfGoods);

let labelPriceOfGoods = document.createElement('label');
labelPriceOfGoods.htmlFor = 'inputPriceOfGoods';
labelPriceOfGoods.innerText = 'Цена товара';
labelPriceOfGoods.style.fontWeight = '700';

let inputPriceOfGoods = document.createElement('input');
inputPriceOfGoods.name = 'inputPriceOfGoods';
inputPriceOfGoods.type = 'number';
inputPriceOfGoods.required = true;
inputPriceOfGoods.maxLength = 10;
inputPriceOfGoods.placeholder = 'цена данного товара';
inputPriceOfGoods.style.width = '100%';
inputPriceOfGoods.style.padding = '10px';
inputPriceOfGoods.style.boxSizing = 'border-box';
inputPriceOfGoods.style.margin = '5px 0 15px 0';

labelPriceOfGoods.append(inputPriceOfGoods);

let labelImageOfGoods = document.createElement('label');
labelImageOfGoods.htmlFor = 'inputImageOfGoods';
labelImageOfGoods.innerText = 'Картинка товара';
labelImageOfGoods.style.fontWeight = '700';

let inputImageOfGoods = document.createElement('input');
inputImageOfGoods.name = 'inputImageOfGoods';
inputImageOfGoods.type = 'url';
inputImageOfGoods.required = true;
inputImageOfGoods.placeholder = 'ссылка на картинку';
inputImageOfGoods.style.width = '100%';
inputImageOfGoods.style.padding = '10px';
inputImageOfGoods.style.boxSizing = 'border-box';
inputImageOfGoods.style.margin = '5px 0 15px 0';

labelImageOfGoods.append(inputImageOfGoods);

let button = document.createElement('button');
button.innerText = 'сохранить введенный товар';
button.style.fontWeight = '700';
button.style.width = '70%';
button.style.padding = '5px';
button.style.display = 'block';
button.style.margin = '0 auto';
button.style.borderRadius = '10px';
button.style.cursor = 'pointer';

formProducts.append(labelNameOfGoods, labelNumberOfGoods, labelPriceOfGoods, labelImageOfGoods, button);

let link = document.createElement('a');
link.innerText = 'перейти на страницу товаров';
link.href = 'list.html';
link.target = 'blank';
link.style.fontSize = '18px';
link.style.width = '70%';
link.style.display = 'block';
link.style.textAlign = 'center';
link.style.margin = '0 auto';
link.style.marginTop = '10px';
wrapper.append(link);

// ----------------------------------------------------------------------

document.forms.formProducts.onsubmit = function (event) {
    event.preventDefault();
    let nameOfGoods = this.inputNameOfGoods.value;
    let numberOfGoods = this.inputNumberOfGoods.value;
    let priceOfGoods = this.inputPriceOfGoods.value;
    let imageOfGoods = this.inputImageOfGoods.value;

    let data = new Date();
    let id = data.getTime();

    formProducts.reset();

    let allGoods = JSON.parse(localStorage.getItem('allGoods'));

    if (allGoods === null) {
        let goods = {nameOfGoods, numberOfGoods, priceOfGoods, imageOfGoods, id};
        let arrayGoods = [];
        arrayGoods.push(goods);

        localStorage.setItem('allGoods', JSON.stringify(arrayGoods));

    } else {
        let goods = {nameOfGoods, numberOfGoods, priceOfGoods, imageOfGoods, id};
        allGoods.push(goods);
        localStorage.setItem('allGoods', JSON.stringify(allGoods));
    }
};

// ----------------------------------------------------------------------
