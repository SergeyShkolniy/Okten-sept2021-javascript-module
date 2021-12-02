function userCard(number) {
    let cardInformation = {balance: 100, transactionLimit: 100, historyLogs: [], key: number};

    // // Дана функція повертає об’єкт котрий містить інформацію про карту:
    let getCardOptions = {
        getCardOptions: function () {
            console.log(cardInformation, `Баланс карты # ${cardInformation.key} - стартовый`);
        }
    };

    // // Ця функція отримує певну кількість грошей і заповнює баланс карти:
    let putCredits = {
        putCredits: function (put) {
            cardInformation.balance = cardInformation.balance + put;
            setHistoryLogs.setHistoryLogs('Received credits', put);
            console.log(cardInformation, `Баланс карты # ${cardInformation.key} - после пополнения на ${put}`);

        }
    };

    // // Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits):
    let takeCredits = {
        takeCredits: function (take) {
            cardInformation.balance = cardInformation.balance - take;
            setHistoryLogs.setHistoryLogs('Withdrawal of credits', take);
            console.log(cardInformation, `Баланс карты # ${cardInformation.key} - после снятия на ${take}`);
        }
    };

    // // Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
    let setTransactionLimit = {
        setTransactionLimit: function (limit) {
            cardInformation.transactionLimit = limit;
            setHistoryLogs.setHistoryLogs('Transaction limit change', limit);
            console.log(cardInformation, `Информация по карте # ${cardInformation.key} - после установки лимита операций на ${limit}`);
        }
    };

    // // Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
    // // Кошти, які ви хочете передати, повинні обкладатися податками 0,5%. Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
    // // транзакцій відправника кредитів (card3).

    let transferCredits = {
        transferCredits: function (transfer, card) {
            let transferAndTaxes  = transfer + transfer * 0.005;
            if (transferAndTaxes > cardInformation.balance) {
                console.error('Недостаточно средств на карте');
            }else if (transferAndTaxes > cardInformation.transactionLimit) {
                console.error('Превышен лимит транзакций');
            } else {
                takeCredits.takeCredits(transferAndTaxes);
                card.putCredits.putCredits(transfer);
            }
        }
    };

    // // Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit change операції і зберігайте history log. History log (Дивитись зображення 1)
    // // інформація має зберігатись в об’єктах з такими властивостями:
    // //    • operationType (стрічка яка описує здійснену операцію)
    // //    • credits (кількість коштів)
    // //    • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
    let setHistoryLogs = {
        setHistoryLogs: function (operation, credits) {
            let received = {operationType: operation, credits: credits, operationTime: new Date().toLocaleString('en-GB')};
            cardInformation.historyLogs.push(received)
        }
    };

    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits};
}

    // // Створити класс `UserAccount`: const user = new UserAccount('Bob');
    // // Класс має містити:
    // // Властивості акаунту користувача:
    // // - name (передати в конструкторі)
    // // - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
    // // Методи акаунту користувача:
    // // - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards:
    // // user.addCard();
    // // Користувач повинен мати <= 3 карти.

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
        addCard() {
            if (this.cards.length > 3) {
                console.error('У Вас слишком много карточек');
            }else {
                this.cards.push(userCard(this.cards.length + 1));
            }
        }
    getCardByKey(number) {
        return this.cards[number - 1];
    }
}

let user = new UserAccount('Bob');

user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.getCardOptions.getCardOptions();
card2.getCardOptions.getCardOptions();

card1.putCredits.putCredits(500);
card1.setTransactionLimit.setTransactionLimit(800);

card1.transferCredits.transferCredits(300, card2 );

card2.takeCredits.takeCredits(50);


