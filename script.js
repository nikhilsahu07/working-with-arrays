'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Nikhil Sahu',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Riya Singh',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Kunal Yadav',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Usha Devi',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// /////////////////////// Simple Array Methods /////////////////////////

// let alphabet5 = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(alphabet5.slice(2));
// console.log(alphabet5.slice(1, 3));
// console.log(alphabet5.slice(-2));
// console.log(alphabet5.slice(1, -2));
// console.log(alphabet5.slice());
// console.log([...alphabet5]);

// // SPLICE(startIndex, deleteCount) --deletes element from and no of (Change the original Array)
// console.log(alphabet5.splice(4));
// console.log(alphabet5);
// console.log(alphabet5.splice(2, 3));
// console.log(alphabet5.splice(-2, 1));
// console.log(alphabet5);
// console.log(alphabet5.splice(-2))

// // REVERSE -- changes the original array
// alphabet5 = ['a', 'b', 'c', 'd', 'e'];
// const alphabet10 = ['f', 'g', 'h', 'j', 'k'];
// // console.log(alphabet5.reverse());
// // console.log(alphabet10.reverse());
// // console.log(alphabet10);

// // CONCAT
// let alphabetETC = ['l', 'm', 'n'];
// const letter = alphabet5.concat(alphabet10, alphabetETC);
// console.log(letter);
// console.log([...alphabet5, ...alphabet10]);

// // JOIN
// console.log(letter.join(' - '));


// ///////////////////// New at Method /////////////////////

// const arr = [23, 14, 31, 47];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1)); //can use negative indexing
// console.log(arr.slice(-1)[0]);

// console.log('nicks'.at(3));


// //////////////////// Looping Arrays: forEach //////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);

//     } else {
//         console.log(`Movement ${i + 1}: You credited ${Math.abs(movement)}`);

//     }
// }
// console.log(`------------forEach--------------`);

// movements.forEach(function (movement, index, arrayItself) {
//     if (movement > 0) {
//         console.log(`Movement ${index + 1}: You deposited ${movement}`);

//     } else {
//         console.log(`Movement ${index + 1}: You credited ${Math.abs(movement)}`);

//     }
// })

// // forEach is higher order functions that recieve a callback function
// //0: function(200)
// //1: function(400)
// //2: function(-400)
// //...
// // continue, break don't work in forEach


// //////////////////////// forEach With Maps and Sets //////////////////////

// // MAP
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (key, value, map) {
//     console.log(`${key}: ${value}`);

// })

// // SET
// const currenciesUnique = new Set(['USD', 'INR', 'USD', 'EUR', 'INR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _value, set) {
//     console.log(`${value}: ${_value}`);

// })


///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////// Creating DOM Elements ////////////////////////////////

const displayMovements = function (movements) {
    containerMovements.innerHTML = ``; //innHTML returns the whole div class with their tags.. the whole html
    // containerMovements.textContent = ``; //it only returns the text inside the tags
    movements.forEach(function (mov, i) {
        const transferType = mov > 0 ? 'deposit' : 'withdrawal';
        const movmentHtmlRow = `
        <div class="movements__row">
            <div class="movements__type movements__type--${transferType}">${i} ${transferType}</div>
            <div class="movements__value">${mov}€</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', movmentHtmlRow);

    })
}
displayMovements(account1.movements);

// //////////////////// The MAP Method //////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// // Difference b/w map and forEach is Map create brand new Array
// const movementsInUsd = movements.map(function (movInEur) {
//     return movInEur * eurToUsd
// })
// console.log(movementsInUsd);
// console.log(movements);

// const movementsInUsd2 = movements.map(movInEur => movInEur * eurToUsd)
// console.log(movementsInUsd2);

// const movementsInUsdFor = [];
// for (const movInEur of movements) {
//     movementsInUsdFor.push(movInEur * eurToUsd)
// }
// console.log(movementsInUsdFor);

// const movementsDescriptions = movements.map((movInEur, i, arrItself) => {
//     return (`Movement ${i + 1}: You ${movInEur > 0 ? 'deposited' : 'withdrawal'} ${movInEur}`)
// })
// console.log(movementsDescriptions);

////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Computing Usernames in Our App /////////////////////
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(n => n.at(0))
            .join('');
    })
}
createUsernames(accounts);
// console.log(accounts);


// const user = 'Nikhil Kumar Sahu';
// const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(n => n.at(0))
//     .join('');

// console.log(username);

//////////////////////////////////////////////////////////////////////
// ////////////////////// The filter Method ////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (movDeposit) {
//     return movDeposit > 0
// })

// console.log(deposits);
// console.log(movements);

// const depositsFor = []
// for (const movDeposit of movements) {
//     if (movDeposit > 0) depositsFor.push(movDeposit)
// }
// console.log(depositsFor);

// const withdrawal = movements.filter(movWithdrawal => movWithdrawal < 0);
// console.log(withdrawal);


// ///////////////////////// The reduce Method //////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);

//     return acc + cur
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const value of movements) balance2 += value;
// console.log(balance2);

const calcDisplayBalance = function (accMovements) {
    const balance = accMovements.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
    labelBalance.textContent = `${balance}€`;
}
calcDisplayBalance(account1.movements)

// // Maximum Value
// const maximum = movements.reduce((acc, cur) => {
//     if (acc > cur) {
//         return acc;
//     } else {
//         return cur;
//     }
// }, movements.at(0));
// console.log(maximum);


// //////////////////////// The Magic of Chaining ////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// // PIPELINES
// const totalDepositsInUsd = movements
//     .filter(mov => mov > 0)
//     .map((mov, i, arr) => {
//         // console.log(arr);
//         return mov * eurToUsd
//     })
//     // .map(mov => mov * eurToUsd)
//     .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositsInUsd);


const calcDisplaySummary = function (movements) {
    const income = movements
        .filter(mov => mov > 0)
        .reduce((acc, curMov) => acc + curMov, 0);
    labelSumIn.textContent = `${income}€`;

    const outcome = movements
        .filter(mov => mov < 0)
        .reduce((acc, curMov) => acc + curMov, 0);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * 1.2) / 100)
        .filter(interest => interest > 1)
        .reduce((acc, deposit) => acc + deposit, 0)
    labelSumInterest.textContent = `${(interest)}€`
}
calcDisplaySummary(account1.movements)

// REMARKS: We should not overuse chaining one after other, it can cause performance issue and debugging problem
// We should it opitmizely use.
// Its bad practice to chain methods that mutate original object like splice and reverse method on long run it cause errors


// ////////////////////// The find Method //////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);
// console.log(movements);

// console.log(accounts);

// const account = accounts.find(account => account.owner === 'Riya Singh');
// console.log(account);

