function wakeUp(iWokeUp, callback) {
    setTimeout(() => {
        if (iWokeUp) {
            console.log('1) Я проснулся в 7:20');
            callback();
        } else {
            console.error('1) Я проспал или продолжаю спать');
            callback();
        }
    }, 3000)

}

function shower(iWentToShower, callback) {
    setTimeout(() => {
        if (iWentToShower) {
            console.log('2) Сходил в душ');
            callback();
        } else {
            console.error('2) Остался грязным')
            callback();
        }
    }, 1000)
}

function breakfast(iHadBreakfast, callback) {
    setTimeout(() => {
        if (iHadBreakfast) {
            console.log('3) Позавтракал');
            callback();
        } else {
            console.error('3) Остался голодным')
            callback();
        }
    }, 500)
}

function roadToWork(iDroveToWork, callback) {
    setTimeout(() => {
        if (iDroveToWork) {
            console.log('4) Доехал до работы')
            callback();
        } else {
            console.error('4) Не добрался до работы')
            callback();
        }
    }, 5000)
}

function worked(iWorked, callback) {
    setTimeout(() => {
        if (iWorked) {
            console.log('5) Плодотворно поработал')
            callback();
        } else {
            console.error('5) Не отработал день по причине болезни')
            callback();
        }
    }, 300)
}

function supermarket(wentToTheSupermarket, callback) {
    setTimeout(() => {
        if (wentToTheSupermarket) {
            console.log('6) Скупился продуктами в магазине');
            callback();
        } else {
            console.error('6) Не купил продуктов, магазин был закрыт')
            callback();
        }
    }, 900)
}

function roadToHome(iDroveToHome, callback) {
    setTimeout(() => {
        if (iDroveToHome) {
            console.log('7) Приехал домой')
            callback();
        } else {
            console.error('7) Задержался на работе')
            callback();
        }
    }, 800)
}

function dinner(iHadDinner, callback) {
    setTimeout(() => {
        if (iHadDinner) {
            console.log('8) Поужинал с семьей')
            callback();
        } else {
            console.error('8) Остался голодным')
            callback();
        }
    }, 1500)
}

function shower2(iWentToShower2, callback) {
    setTimeout(() => {
        if (iWentToShower2) {
            console.log('9) Сходил в душ')
            callback();
        } else {
            console.error('9) Остался грязным')
            callback();
        }
    }, 100)
}

function sleep(iFellSleep, callback) {
    setTimeout(() => {
        if (iFellSleep) {
            console.log('10) Лег спать')
            callback();
        } else {
            console.error('10) Не получилось уснуть')
            callback();
        }
    }, 1700)
}

console.log('-------------------------------');


wakeUp(true, callback => {
    shower(false, callback => {
        breakfast(true, callback => {
            roadToWork(true, callback => {
                worked(true, callback => {
                    supermarket(true, callback => {
                        roadToHome(true, callback => {
                            dinner(false, callback => {
                                shower2(true, callback => {
                                    sleep(true, callback => {
                                        console.log('-------------------------------');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});