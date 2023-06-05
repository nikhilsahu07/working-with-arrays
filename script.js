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

