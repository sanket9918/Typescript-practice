"use strict";
var _a;
var el = {
    name: "Sanket",
    priviledges: ["1"],
    startDate: new Date()
};
function addAnother(a, b) {
    if (typeof a === "string" || typeof b === "string") { // Typeguards using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
var stringRes = addAnother("sanket", "mohapartra"); //comes from the loverloaded string function
console.log(stringRes);
function printEmp(emp) {
    console.log('Name' + emp.name);
    if ('priviledges' in emp) {
        console.log("Priviledges" + emp.priviledges); //not in Employee so not jutsworks by itself
    }
    if ('startDate' in emp) { //check with in using js in
        console.log("Start date" + emp.startDate); //not in Employee so not jutsworks by itself
    }
}
printEmp(el);
//--------------------------------------------------------------------------------------
//If 2 classes are there -happens during run time
// Case 2
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving..");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.parking = function () {
        console.log("Parking");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Car)
        vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.parking();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird':
            console.log('Moving with speed ' + animal.flysingspeed);
            break;
        case 'horse':
            console.log('Moving with speed ' + animal.runningSpeed);
            break;
    }
}
moveAnimal({ type: "horse", runningSpeed: 200 });
moveAnimal({ type: "bird", flysingspeed: 200 });
//--------------------------------------------------------------------------------------------------------------------
//type casting
// const paragraph = document.querySelector('p')
// const para = <HTMLInputElement>document.getElementById('myId')! one way
var para = document.getElementById('myId'); //2nd way
if (para) {
    para.value = "hi there";
}
var errorBag = {
    email: "Not a valid email",
    userName1: "Must start with Capital letter"
};
//------------------------------------------------------------------------------------
// Optional chaining
var userData = {
    id: 'ef',
    name: 'ebjf',
    jo: { title: 'fvf' }
};
console.log((_a = userData === null || userData === void 0 ? void 0 : userData.jo) === null || _a === void 0 ? void 0 : _a.title); //will be checking for if the data is available
//------------------------------------------------------------------------------------
//nulling coalescing
var userData1 = undefined;
// const storedData = userData1 || 'DEFAULT'
var storedData = userData1 !== null && userData1 !== void 0 ? userData1 : 'DEFAULT';
console.log(storedData);
