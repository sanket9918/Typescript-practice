
//Basic Intersection type example
type Admin = {
    name: String
    priviledges: string[]
}
type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

const el: ElevatedEmployee = {
    name: "Sanket",
    priviledges: ["1"],
    startDate: new Date()

}
// console.log(el);
//--------------------------------------------------------------------//
//Type Guards
// Case 1
type TypeOne = string | number
type TypeTwo = boolean | number

type Universal = TypeOne & TypeTwo

function addAnother(a: number, b: number): number //overload function
function addAnother(a: string, b: string): string //overload function

function addAnother(a: TypeOne, b: TypeOne) {
    if (typeof a === "string" || typeof b === "string") { // Typeguards using typeof
        return a.toString() + b.toString()
    }
    return a + b
}

const stringRes = addAnother("sanket", "mohapartra") //comes from the loverloaded string function
console.log(stringRes);


type UnknownEmployee = Employee | Admin

function printEmp(emp: UnknownEmployee) {
    console.log('Name' + emp.name);
    if ('priviledges' in emp) {
        console.log("Priviledges" + emp.priviledges); //not in Employee so not jutsworks by itself
    }
    if ('startDate' in emp) { //check with in using js in
        console.log("Start date" + emp.startDate); //not in Employee so not jutsworks by itself
    }
}
printEmp(el)

//--------------------------------------------------------------------------------------
//If 2 classes are there -happens during run time
// Case 2
class Car {
    drive() {
        console.log("Driving..");

    }
}
class Truck {
    parking() {
        console.log("Parking");

    }
}
type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Car)
        vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.parking()
    }
}
useVehicle(v1)
useVehicle(v2)
//-----------------------------------------------------------------------------------------------

//discriminated Unions
// case 3

interface Bird {
    type: 'bird' //not a val but a literal type
    flysingspeed: number
}
interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse
function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird':
            console.log('Moving with speed ' + animal.flysingspeed);
            break
        case 'horse':
            console.log('Moving with speed ' + animal.runningSpeed);
            break
    }

}
moveAnimal({ type: "horse", runningSpeed: 200 })
moveAnimal({ type: "bird", flysingspeed: 200 })

//--------------------------------------------------------------------------------------------------------------------
//type casting

// const paragraph = document.querySelector('p')

// const para = <HTMLInputElement>document.getElementById('myId')! one way
let para = document.getElementById('myId') as HTMLInputElement //2nd way

if (para) {
    (para as HTMLInputElement).value = "hi there"
}

//-----------------------------------------------------------------------------------
//Index Properties -> restrict the type of properties 

interface ErrorContainer {
    [props: string]: string
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    userName1: "Must start with Capital letter"
}

//------------------------------------------------------------------------------------
// Optional chaining
const userData = {
    id: 'ef',
    name: 'ebjf',
    jo: { title: 'fvf' }
}
console.log(userData?.jo?.title); //will be checking for if the data is available

//------------------------------------------------------------------------------------
//nulling coalescing
const userData1 = undefined
// const storedData = userData1 || 'DEFAULT'
const storedData = userData1 ?? 'DEFAULT'
console.log(storedData);



