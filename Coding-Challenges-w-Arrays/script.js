'use strict';

////////////////// Coding Challenge #1 ////////////////////////

const checkDogs = function (dogsJulia, dogsKate) {

    const onlyDogsJulia = dogsJulia.splice(1, 2);
    const onlyDogskate = dogsKate.splice(1, 2);
    const bothsDogs = onlyDogsJulia.concat(onlyDogskate);
    bothsDogs.forEach(function (dogAge, i) {
        if (dogAge >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old.`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy.🐶`);
        }
    })

};
// Test Data:
const juliaDogs1 = [3, 5, 2, 12, 7];
const juliaDogs2 = [3, 5, 2, 12, 7];
const kateDogs1 = [4, 1, 15, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];

checkDogs(juliaDogs1, kateDogs1);
console.log();
checkDogs(juliaDogs2, kateDogs2);

///////////////////// Coding Challenge #2 ///////////////////////////

const calcAverageHumanAge = function (dogsAge) {
    const humanAges = dogsAge
        .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
        .filter(humanAge => humanAge >= 18)
        .reduce((acc, cur) => acc + cur / dogsAge.length, 0);

    console.log(humanAges.toFixed(2));
}
// Test Data
const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]

calcAverageHumanAge(data1, data2)


/////////// Coding Challenge #3 ///////////////

// I made the function with chaining in the first part


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },

];

// 1.
dogs.forEach(dogDetails => dogDetails.recommendFood = Math.trunc(dogDetails.weight ** 0.75 * 28));

// 2.
const SarahDog = dogs.find(dogDetails => dogDetails.owners.includes('Sarah'));
if (SarahDog.curFood > SarahDog.recommendFood) {
    console.log('He is OverEating');
} else {
    console.log('He is having in good amount')
}


// 3.
const ownersDogEatTooMuch = dogs
    .filter(dogDetails => dogDetails.curFood > dogDetails.recommendFood)
    .flatMap(dogDetails => dogDetails.owners)

const ownersDogEatTooLittle = dogs
    .filter(dogDetails => dogDetails.curFood < dogDetails.recommendFood)
    .flatMap(dogDetails => dogDetails.owners)

console.log(ownersDogEatTooMuch);
console.log(ownersDogEatTooLittle);

// 4.
console.log(`${ownersDogEatTooMuch.join(' and ')}'s dogs eat too Much.`)
console.log(`${ownersDogEatTooLittle.join(' and ')}'s dogs eat too Little.`);

// 5.
// const excatlyAsRecc = dogs.find(dog => dog.curFood === dog.recommendFood)
// console.log(excatlyAsRecc ? true : false)

console.log(dogs.some(dog => dog.curFood === dog.recommendFood))

// 6.
console.log(dogs.some(dogDetails => dogDetails.curFood > dogDetails.recommendFood * 0.9 && dogDetails.curFood < dogDetails.recommendFood * 1.1));

const checkEatingOkay = dogDetails =>
    dogDetails.curFood > dogDetails.recommendFood * 0.9 && dogDetails.curFood < dogDetails.recommendFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
const okayEatingDogs = dogs
    .filter(dogDetails => dogDetails.curFood > dogDetails.recommendFood * 0.9 && dogDetails.curFood < dogDetails.recommendFood * 1.1)
    .flatMap(dog => dog.owners);

console.log(okayEatingDogs);

// 8.
const ascendReccFood = dogs
    .map(dog => dog.recommendFood)
    .sort((a, b) => a - b)

console.log(ascendReccFood);
