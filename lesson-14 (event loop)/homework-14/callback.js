function wakeUp(iWokeUp, callback) {
    setTimeout(() => {
        if (iWokeUp) {
            callback('1) Я проснулся в 7:20', null);
        } else {
            callback(null, '1) Я проспал или продолжаю спать');
        }
    }, 3000)

}

function shower(iWentToShower, callback) {
    setTimeout(() => {
        if (iWentToShower) {
            callback('2) Сходил в душ', null);
        } else {
            callback(null, '2) Остался грязным');
        }
    }, 1000)
}

function breakfast(iHadBreakfast, callback) {
    setTimeout(() => {
        if (iHadBreakfast) {
            callback('3) Позавтракал', null);
        } else {
            callback(null, '3) Остался голодным');
        }
    }, 500)
}

function roadToWork(iDroveToWork, callback) {
    setTimeout(() => {
        if (iDroveToWork) {
            callback('4) Доехал до работы', null);
        } else {
            callback(null, '4) Не добрался до работы');
        }
    }, 5000)
}

function worked(iWorked, callback) {
    setTimeout(() => {
        if (iWorked) {
            callback('5) Плодотворно поработал', null);
        } else {
            callback(null, '5) Не отработал день по причине болезни');
        }
    }, 300)
}

function supermarket(wentToTheSupermarket, callback) {
    setTimeout(() => {
        if (wentToTheSupermarket) {
            callback('6) Скупился продуктами в магазине', null);
        } else {
            callback(null, '6) Не купил продуктов, магазин был закрыт');
        }
    }, 900)
}

function roadToHome(iDroveToHome, callback) {
    setTimeout(() => {
        if (iDroveToHome) {
            callback('7) Приехал домой', null);
        } else {
            callback(null, '7) Задержался на работе');
        }
    }, 800)
}

function dinner(iHadDinner, callback) {
    setTimeout(() => {
        if (iHadDinner) {
            callback('8) Поужинал с семьей', null);
        } else {
            callback(null, '8) Остался голодным');
        }
    }, 1500)
}

function shower2(iWentToShower2, callback) {
    setTimeout(() => {
        if (iWentToShower2) {
            callback('9) Сходил в душ', null);
        } else {
            callback(null, '9) Остался грязным');
        }
    }, 100)
}

function sleep(iFellSleep, callback) {
    setTimeout(() => {
        if (iFellSleep) {
            callback('10) Лег спать', null);
        } else {
            callback(null, '10) Не получилось уснуть');
        }
    }, 1700)
}

console.log('-------------------------------');

wakeUp(true, (yes, no) => {
    if (yes) {
        console.log(yes);
    } else {
        console.error(no);
    }
    shower(false, (yes, no) => {
        if (yes) {
            console.log(yes);
        } else {
            console.error(no);
        }
        breakfast(true, (yes, no) => {
            if (yes) {
                console.log(yes);
            } else {
                console.error(no);
            }
            roadToWork(true, (yes, no) => {
                if (yes) {
                    console.log(yes);
                } else {
                    console.error(no);
                }
                worked(true, (yes, no) => {
                    if (yes) {
                        console.log(yes);
                    } else {
                        console.error(no);
                    }
                    supermarket(true, (yes, no) => {
                        if (yes) {
                            console.log(yes);
                        } else {
                            console.error(no);
                        }
                        roadToHome(true, (yes, no) => {
                            if (yes) {
                                console.log(yes);
                            } else {
                                console.error(no);
                            }
                            dinner(false, (yes, no) => {
                                if (yes) {
                                    console.log(yes);
                                } else {
                                    console.error(no);
                                }
                                shower2(true, (yes, no) => {
                                    if (yes) {
                                        console.log(yes);
                                    } else {
                                        console.error(no);
                                    }
                                    sleep(true, (yes, no) => {
                                        if (yes) {
                                            console.log(yes);
                                        } else {
                                            console.error(no);
                                        }
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