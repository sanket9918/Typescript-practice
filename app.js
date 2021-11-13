"use strict";
// const names: Array<string> = []
// // names[0].split(' ')
// const promise: Promise<string> = new Promise((resolve, reject) => { //This Promise<> kind of declaration is called as Generics
//     setTimeout(() => {
//         resolve('This is done')
//     }, 2000)
// })
// promise.then(data => {
//     data.split('')
// })
//--------------------------------------------------------------------------
//Own Generic 
// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB)
// }
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'key', hobbies: ['hockey'] }, { key: 1 });
// const mergedObj1 = merge({ name: 'key', hobbies: ['hockey'] }, 1) //silently ignore the 2nd object -> which is just a number not an obj
const mergedObj2 = merge({ name: 'key', }, { key: 1 }); //But this is redundant 
console.log(mergedObj2);
function countAndDesc(element) {
    let desc = 'Got no elements';
    if (element.length > 0) {
        desc = 'Got ' + element.length + ' elements';
    }
    return [element, desc];
}
console.log(countAndDesc("Hello"));
console.log(countAndDesc(["Hello", "there"])); //Automatically adjusts the signature
//----------------------------------------------------------------------------------------------------------
//Constraints
function extractAndConvert(obj, key) {
    return 'value: ' + obj[key];
}
extractAndConvert({ name: 'Sanket' }, 'name');
//------------------------------------------------------------------------------------------------------
//Generic Class
class StorageFunc {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new StorageFunc();
textStorage.addItem("Hello");
textStorage.addItem("Sanket");
textStorage.addItem(10);
textStorage.removeItem('Sanket');
console.log(textStorage.getItem());
