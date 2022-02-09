//Varsta mea curenta
const myAge = 24;
//early Years
let earlyYears= 2;
earlyYears *= 10.5;
let laterYears = myAge-2;
laterYears *=4;

console.log(laterYears);
console.log(earlyYears);

//my age in dog years
let myAgeInDogYears= earlyYears + laterYears;
//my name and age in dog years
let myName = 'Dan'; // scris si eu din cap )
myName = myName.toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);