"use strict";
// type Person = {
//     name: string
//     age: number
// type AddFn = (a: number, b: number) => number; // Type version of the same interface 
var add1;
add1 = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(val, n) {
        this.val = val;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('sanket', 'hello'); //Though user1 is defined through the interface , the Person class implements it 
user1.greet('something');
