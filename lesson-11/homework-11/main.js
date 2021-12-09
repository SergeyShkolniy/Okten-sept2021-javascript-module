// 1 -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let wrapper = document.createElement('div');
// document.body.append(wrapper);
//
// let form = document.createElement('form');
// form.id = 'form';
// form.style.margin = '15px';
// wrapper.append(form);
//
// let inputName = document.createElement('input');
// inputName.name = 'name';
// inputName.type = 'text';
// inputName.placeholder = 'введите Ваше имя'
// inputName.style.padding = '5px';
// inputName.style.marginRight = '10px';
//
// let inputAge = document.createElement('input');
// inputAge.name = 'age';
// inputAge.type = 'number';
// inputAge.placeholder = 'введите Ваш возраст'
// inputAge.style.padding = '5px';
// inputAge.style.marginRight = '10px';
//
// let button = document.createElement('button');
// button.innerText = 'подтвердить';
// button.style.padding = '5px';
// button.style.cursor = 'pointer';
//
// form.append(inputName, inputAge, button);
//
// button.onclick = function (event) {
//     event.preventDefault()
//     let name = document.forms.form.name.value;
//     let age = document.forms.form.age.value;
//     let user = {name: name, age: age};
//     let userJson = JSON.stringify(user);
//     let id = 'id: ' + localStorage.length;
//     localStorage.setItem(id, userJson)
// }
// ----------------------------------------------------------------------

// 2 -створити форму з інпутами для model,type та volume автівки. при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let wrapper = document.createElement('div');
// document.body.append(wrapper);
//
// let form = document.createElement('form');
// form.id = 'form';
// form.style.margin = '15px';
// wrapper.append(form);
//
// let inputModelAuto = document.createElement('input');
// inputModelAuto.name = 'modelAuto';
// inputModelAuto.type = 'text';
// inputModelAuto.placeholder = 'модель авто'
// inputModelAuto.style.padding = '5px';
// inputModelAuto.style.marginRight = '10px';
//
// let inputTypeAuto = document.createElement('input');
// inputTypeAuto.name = 'typeAuto';
// inputTypeAuto.type = 'text';
// inputTypeAuto.placeholder = 'тип кузова'
// inputTypeAuto.style.padding = '5px';
// inputTypeAuto.style.marginRight = '10px';
//
// let inputVolumeAuto = document.createElement('input');
// inputVolumeAuto.name = 'volumeAuto';
// inputVolumeAuto.type = 'number';
// inputVolumeAuto.placeholder = 'объем двигателя'
// inputVolumeAuto.style.padding = '5px';
// inputVolumeAuto.style.marginRight = '10px';
//
// let button = document.createElement('button');
// button.innerText = 'подтвердить';
// button.style.padding = '5px';
// button.style.cursor = 'pointer';
//
// form.append(inputModelAuto, inputTypeAuto, inputVolumeAuto, button);
//
// button.onclick = function (event) {
//     event.preventDefault()
//     let allAuto = JSON.parse(localStorage.getItem('allAuto'));
//
//     if (allAuto === null) {
//
//         let model = document.forms.form.modelAuto.value;
//         let type = document.forms.form.typeAuto.value;
//         let volume = document.forms.form.volumeAuto.value;
//
//         let auto = {model: model, type: type, volume: volume};
//         let arrayAuto = [];
//         arrayAuto.push(auto);
//
//         localStorage.setItem('allAuto', JSON.stringify(arrayAuto));
//
//     } else {
//
//         let model = document.forms.form.modelAuto.value;
//         let type = document.forms.form.typeAuto.value;
//         let volume = document.forms.form.volumeAuto.value;
//
//         let auto = {model: model, type: type, volume: volume};
//         allAuto.push(auto);
//
//         localStorage.setItem('allAuto', JSON.stringify(allAuto));
//     }
// };
