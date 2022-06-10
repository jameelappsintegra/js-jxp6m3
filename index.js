const list = [1, 2, 3, 4, 5];
console.log(list.reduce((number, nextNumber) => number + nextNumber));
// --> 15

let arr = [
  { name: 'John', age: 30 },
  { name: 'Grin', age: 10 },
  { name: 'Marie', age: 50 },
];

let newArr = arr.filter((person) => {
  return person.age !== 10;
});

let newArr1 = arr.find((person) => {
  return person.age === 10;
});

console.log(`FILTER : ${JSON.stringify(newArr)}`);
console.log(`FIND : ${JSON.stringify(newArr1)}`);

//Callback
function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20

const person = {
  name: 'John',
};

const updatedPerson = { ...person, address: 'Bob' };

console.log(JSON.stringify(updatedPerson));

//Array Maniplation
const numbers = [1, 2, 3];
//Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 44, ...numbers];
console.log(added);
//Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);
//updated
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated);

console.log(1);
setTimeout(() => console.log(2), 100);
console.log(3);

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve(3).then((res) => console.log(res));
console.log(4);

setTimeout(() => console.log(2), 0);

Promise.resolve(3).then((res) => console.log(res));
console.log(4);

let arr1 = [1, 2, 3];
console.log(`New SET ${[...new Set(arr1)]}`);

console.log(1 < 7);
let a = (...n) => {
  return n;
};

console.log(a('hi'));

let x = function () {
  return {
    message: 'hi',
  };
};
console.log(x());
let profile = {
  name: 'techsmith',
};
Object.freeze(profile); // it will not add new prop
// Object.seal(profile)
profile.age = 3;
console.log(profile);

let profile2 = {
  name: 'techsmith',
};

// Object.defineProperties(profile2, 'age', {
//   value: 3,
//   writable: false,
// });

console.log(`MAX MIN : ${Math.max()}`);
console.log(`MAX MIN : ${Math.max(1, 2, 3)}`);

let nums = [1, 2, 3, 1, 2, 8, 9, 7, 7];
let b = [];
for (let i = 0; i < nums.length; i++) {
  if (b.indexOf(nums[i]) === -1) {
    b.push(nums[i]);
  }
}
b.sort();
console.log(`${b}`);

const ages = [21, 5, 56, 34, 12, 45, 40, 13];

// const canDrink = ages.filter(function(age){
//   if(age >= 21){
//     return true;
//   }
// })

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);
const companies = [
  { name: 'company one', category: 'retail' },
  { name: 'company two', category: 'retail' },
  { name: 'company three', category: 'auto' },
  { name: 'company four', category: 'IT' },
];
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  (company) => company.category === 'retail'
);

console.log(retailCompanies);

const testMap = companies.map((company) => {
  return `${company.name} [${company.category}]`;
});

console.log(testMap);

function fn(str) {
  //your code
  return str;
}
console.log(fn('Hello') + ' ' + fn('world'));
// Hello world

const value = [2, 3, 5, 23, 34, 45, 52, 56, 60, 65];
const value1 = value;
console.log(value1);
value.forEach((i) => {
  let a = value[i];
  let b = value[i + 1];
  let c = a + b;
  if (c === 57) {
    console.log(`X: ${a} Y:${b} Result : ${c}`);
  }
});

// x + y = 57;
