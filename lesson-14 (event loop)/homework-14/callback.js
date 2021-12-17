function wakeUp(iWokeUp, callback) {
    setTimeout(() => {
        if (iWokeUp) {
            callback(null, '1) Я проснулся в 7:20', );
        } else {
            callback('1) Я проспал или продолжаю спать', null);
        }
    }, 3000)

}

function shower(iWentToShower, callback) {
    setTimeout(() => {
        if (iWentToShower) {
            callback(null, '2) Сходил в душ');
        } else {
            callback('2) Остался грязным', null);
        }
    }, 1000)
}

function breakfast(iHadBreakfast, callback) {
    setTimeout(() => {
        if (iHadBreakfast) {
            callback(null, '3) Позавтракал');
        } else {
            callback('3) Остался голодным', null);
        }
    }, 500)
}

function roadToWork(iDroveToWork, callback) {
    setTimeout(() => {
        if (iDroveToWork) {
            callback(null, '4) Доехал до работы');
        } else {
            callback('4) Не добрался до работы', null);
        }
    }, 5000)
}

function worked(iWorked, callback) {
    setTimeout(() => {
        if (iWorked) {
            callback(null, '5) Плодотворно поработал');
        } else {
            callback('5) Не отработал день по причине болезни', null);
        }
    }, 300)
}

function supermarket(wentToTheSupermarket, callback) {
    setTimeout(() => {
        if (wentToTheSupermarket) {
            callback(null, '6) Скупился продуктами в магазине');
        } else {
            callback('6) Не купил продуктов, магазин был закрыт', null);
        }
    }, 900)
}

function roadToHome(iDroveToHome, callback) {
    setTimeout(() => {
        if (iDroveToHome) {
            callback(null, '7) Приехал домой');
        } else {
            callback('7) Задержался на работе', null);
        }
    }, 800)
}

function dinner(iHadDinner, callback) {
    setTimeout(() => {
        if (iHadDinner) {
            callback(null, '8) Поужинал с семьей');
        } else {
            callback('8) Остался голодным', null);
        }
    }, 1500)
}

function shower2(iWentToShower2, callback) {
    setTimeout(() => {
        if (iWentToShower2) {
            callback(null, '9) Сходил в душ');
        } else {
            callback('9) Остался грязным', null);
        }
    }, 100)
}

function sleep(iFellSleep, callback) {
    setTimeout(() => {
        if (iFellSleep) {
            callback(null, '10) Лег спать');
        } else {
            callback('10) Не получилось уснуть', null);
        }
    }, 1700)
}

console.log('-------------------------------');


wakeUp(true, (error, yes) => {
    if (error) {
        console.error(error);
    } else {
        console.log(yes);
    }
    shower(false, (error, yes) => {
        if (error) {
            console.error(error);
        } else {
            console.log(yes);
        }
        breakfast(true, (error, yes) => {
            if (error) {
                console.error(error);
            } else {
                console.log(yes);
            }
            roadToWork(true, (error, yes) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(yes);
                }
                worked(true, (error, yes) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(yes);
                    }
                    supermarket(true, (error, yes) => {
                        if (error) {
                            console.error(error);
                        } else {
                            console.log(yes);
                        }
                        roadToHome(true, (error, yes) => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log(yes);
                            }
                            dinner(false, (error, yes) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    console.log(yes);
                                }
                                shower2(true, (error, yes) => {
                                    if (error) {
                                        console.error(error);
                                    } else {
                                        console.log(yes);
                                    }
                                    sleep(true, (error, yes) => {
                                        if (error) {
                                            console.error(error);
                                        } else {
                                            console.log(yes);
                                        }
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