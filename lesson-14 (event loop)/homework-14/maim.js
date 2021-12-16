// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeUp(iWokeUp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iWokeUp) {
        console.log('1) Я проснулся в 7:20');
        resolve('1) Я проснулся в 7:20');
      } else {
        console.log('1) Я проспал или продолжаю спать');
        reject('1) Я проспал или продолжаю спать');
      }
    }, 3000)
  })
}

function shower(iWentToShower) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iWentToShower) {
        console.log('2) Сходил в душ');
        resolve('2) Сходил в душ');
      } else {
        console.log('2) Остался грязным');
        reject('2) Остался грязным');
      }
    }, 1000)
  })
}

function breakfast(iHadBreakfast) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iHadBreakfast) {
        console.log('3) Позавтракал');
        resolve('3) Позавтракал');
      } else {
        console.log('3) Остался голодным');
        reject('3) Остался голодным');
      }
    }, 500)
  })
}

function roadToWork(iDroveToWork) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iDroveToWork) {
        console.log('4) Доехал до работы');
        resolve('4) Доехал до работы');
      } else {
        console.log('4) Не добрался до работы');
        reject('4) Не добрался до работы');
      }
    }, 5000)
  })
}

function worked(iWorked) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iWorked) {
        console.log('5) Плодотворно поработал');
        resolve('5) Плодотворно поработал');
      } else {
        console.log('5) Не отработал день по причине болезни');
        reject('5) Не отработал день по причине болезни');
      }
    }, 300)
  })
}

function supermarket(wentToTheSupermarket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wentToTheSupermarket) {
        console.log('6) Скупился продуктами в магазине');
        resolve('6) Скупился продуктами в магазине');
      } else {
        console.log('6) Не купил продуктов, магазин был закрыт');
        reject('6) Не купил продуктов, магазин был закрыт');
      }
    }, 900)
  })
}

function roadToHome(iDroveToHome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iDroveToHome) {
        console.log('7) Приехал домой');
        resolve('7) Приехал домой');
      } else {
        console.log('7) Задержался на работе');
        reject('7) Задержался на работе');
      }
    }, 800)
  })
}

function dinner(iHadDinner) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iHadDinner) {
        console.log('8) Поужинал с семьей');
        resolve('8) Поужинал с семьей');
      } else {
        console.log('8) Остался голодным');
        reject('8) Остался голодным');
      }
    }, 1500)
  })
}

function shower2(iWentToShower2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iWentToShower2) {
        console.log('9) Сходил в душ');
        resolve('9) Сходил в душ');
      } else {
        console.log('9) Остался грязным');
        reject('9) Остался грязным');
      }
    }, 100)
  })
}

function sleep(iFellSleep) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iFellSleep) {
        console.log('10) Лег спать');
        resolve('10) Лег спать');
      } else {
        console.log('10) Не получилось уснуть');
        reject('10) Не получилось уснуть');
      }
    }, 1700)
  })
}

console.log('-------------------------------');
console.log('Без ELOOP');

wakeUp(true);
shower(true);
breakfast(true);
roadToWork(true);
worked(true);
supermarket(true);
roadToHome(true);
dinner(true);
shower2(true);
sleep(true);
console.log('-------------------------------');


// async function schedule() {
//   try {
//     const iWokeUp = await wakeUp(true);
//     const iWentToShower = await shower(true);
//     const iHadBreakfast = await breakfast(true);
//     const iDroveToWork = await roadToWork(true);
//     const iWorked = await worked(true);
//     const wentToTheSupermarket = await supermarket(true);
//     const iDroveToHome = await roadToHome(true);
//     const iHadDinner = await dinner(true);
//     const iWentToShower2 = await shower2(true);
//     const iFellSleep = await sleep(true);
//
//     console.log('-------------------------------');
//     console.log('ELOOP');
//
//     console.log(iWokeUp);
//     console.log(iWentToShower);
//     console.log(iHadBreakfast);
//     console.log(iDroveToWork);
//     console.log(iWorked);
//     console.log(wentToTheSupermarket);
//     console.log(iDroveToHome);
//     console.log(iHadDinner);
//     console.log(iWentToShower2);
//     console.log(iFellSleep);
//     console.log('-------------------------------');
//
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// schedule()



