function Logger(logString: string) {
    return function (constructor: Function) {
        //function is needed
        console.log(logString)
        console.log(constructor);

    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');

    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {

        return class extends originalConstructor {
            constructor(..._: any[]) {
                super()
                console.log('Redering Template...');
                const hookEl = document.getElementById('head')
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }

            }
        }
    }
}
@Logger('Logging-Person')
@WithTemplate('<p>Person-Sanket</p>', 'head') //This executes first
class Person1 {
    name = "max"
    constructor() {
        console.log('creating person object...');
    }
}

const pers = new Person1()
console.log(pers);

//--------------
//they only run at the time of class definition not initiation
function Log(target: any, propertyName: string | Symbol) { //Property decorator
    console.log(target, propertyName);


}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {//Accessor decorator
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { //Method Descriptor
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) { //Parameter Decorator
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}


class Product {
    @Log
    title: string
    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {

            this._price = val
        }
        else {
            throw new Error('Invalid price ')
        }
    }
    constructor(r: string, p: number) {
        this.title = r
        this._price = p
    }

    @Log3 //Method decorator
    getPriceWithTax(@Log4 tax: number) {
        return this.price * (1 + tax)
    }
}

//-------------
class Printer {
    message = 'this works'
    showMessage() {
        console.log(this.message);

    }

}
const p = new Printer()
const button = document.querySelector('button')
if (button) {
    button.addEventListener('click', p.showMessage.bind(p))
}