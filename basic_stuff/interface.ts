// type Person = {
//     name: string
//     age: number

//     greet(phrase: string): void //no body needed as it is not a class
// }

// Types are more flexible but not implementatble with classes,Interface primarily used with objects....unions are supported in cutome types

// interface Person {
//     name: string
//     age: number

//     greet(phrase: string): void //no body needed as it is not a class
// }

// let user1: Person
// user1 = {
//     name: "sanket",
//     age: 20,
//     greet(phrase: string) {
//         console.log(phrase + " " + this.name);
//     }
// }

// user1.greet("hi there")
interface AddFn {
    (a: number, b: number): number
}

// type AddFn = (a: number, b: number) => number; // Type version of the same interface 

let add1: AddFn;

add1 = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    outputName?: string //optional property
}
interface Greetable extends Named { //interfaces can be extended 
    greet(phrase: string): void
}
interface AnotherInterface {
    val: string
}

class Person implements Greetable, AnotherInterface {
    name?: string
    val!: string
    constructor(val: string, n?: string) { //required values are required to be before the optional values
        this.val = val
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);

    }

}

let user1: Greetable
user1 = new Person('sanket', 'hello') //Though user1 is defined through the interface , the Person class implements it 
user1.greet('something')