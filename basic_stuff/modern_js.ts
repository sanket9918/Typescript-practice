// modern js
const userName = 'Max'
let n = 12

let array1 = ['I', 'am', 'testing']
let array2 = ['javascript']


array1 = [...array1, ...array2] // same as arrra1.push(...array2)
console.log(array1);


// Object destructuring test
let person1 = {
    roll: 'something',
    s1: 'somethingAgain'
}

const { roll, s1 } = person1
console.log("The roll is " + roll);
console.log("the s1 is " + s1);

//Arrow function with reduce

let sum = (...numbers: number[]) => {
    return numbers.reduce((prevVal, currVal) => {
        return prevVal + currVal
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 9, 10));


