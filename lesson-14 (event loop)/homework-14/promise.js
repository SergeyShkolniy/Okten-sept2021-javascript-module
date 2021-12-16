function wakeUp(iWokeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iWokeUp) {
                resolve('1) Я проснулся в 7:20');
            } else {
                reject('1) Я проспал или продолжаю спать');
            }
        }, 3000)
    })
}

function shower(iWentToShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iWentToShower) {
                resolve('2) Сходил в душ');
            } else {
                reject('2) Остался грязным');
            }
        }, 1000)
    })
}

function breakfast(iHadBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iHadBreakfast) {
                resolve('3) Позавтракал');
            } else {
                reject('3) Остался голодным');
            }
        }, 500)
    })
}

function roadToWork(iDroveToWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iDroveToWork) {
                resolve('4) Доехал до работы');
            } else {
                reject('4) Не добрался до работы');
            }
        }, 5000)
    })
}

function worked(iWorked) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iWorked) {
                resolve('5) Плодотворно поработал');
            } else {
                reject('5) Не отработал день по причине болезни');
            }
        }, 300)
    })
}

function supermarket(wentToTheSupermarket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wentToTheSupermarket) {
                resolve('6) Скупился продуктами в магазине');
            } else {
                reject('6) Не купил продуктов, магазин был закрыт');
            }
        }, 900)
    })
}

function roadToHome(iDroveToHome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iDroveToHome) {
                resolve('7) Приехал домой');
            } else {
                reject('7) Задержался на работе');
            }
        }, 800)
    })
}

function dinner(iHadDinner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iHadDinner) {
                resolve('8) Поужинал с семьей');
            } else {
                reject('8) Остался голодным');
            }
        }, 1500)
    })
}

function shower2(iWentToShower2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iWentToShower2) {
                resolve('9) Сходил в душ');
            } else {
                reject('9) Остался грязным');
            }
        }, 100)
    })
}

function sleep(iFellSleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iFellSleep) {
                resolve('10) Лег спать');
            } else {
                reject('10) Не получилось уснуть');
            }
        }, 1700)
    })
}


wakeUp(true)
    .then(iWokeUp => {
        console.log(iWokeUp);
        return shower(true)
    })
    .then(iWentToShower => {
        console.log(iWentToShower);
        return breakfast(true)
    })
    .then(iHadBreakfast => {
        console.log(iHadBreakfast);
        return roadToWork(true)
    })
    .then(iDroveToWork => {
        console.log(iDroveToWork);
        return worked(true)
    })
    .then(iWorked => {
        console.log(iWorked);
        return supermarket(true)
    })
    .then(wentToTheSupermarket => {
        console.log(wentToTheSupermarket);
        return roadToHome(true)
    })
    .then(iDroveToHome => {
        console.log(iDroveToHome);
        return dinner(true)
    })
    .then(iHadDinner => {
        console.log(iHadDinner);
        return shower2(true)
    })
    .then(iWentToShower2 => {
        console.log(iWentToShower2);
        return sleep(true)
    })
    .then(iFellSleep => {
        console.log(iFellSleep);
    })

    .catch(e => {
        console.error(e)
    });
