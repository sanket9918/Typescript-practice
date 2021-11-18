/// <reference path="testInterface.ts" />

namespace TestInterface { //same interface name along with the import

    class Person3 implements Person2 {
        constructor(public name: string, public age: number) {
            console.log(name, age);
        }
    }

    const person3 = new Person3("Sanket", 12)
    console.log(person3.name, person3.age);
}
