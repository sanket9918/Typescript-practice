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
function merge<T extends object, U extends object>(objA: T, objB: U) { //mergedObj1 will throw error becoz of constraint
    return Object.assign(objA, objB)
}
const mergedObj = merge({ name: 'key', hobbies: ['hockey'] }, { key: 1 })

// const mergedObj1 = merge({ name: 'key', hobbies: ['hockey'] }, 1) //silently ignore the 2nd object -> which is just a number not an obj

const mergedObj2 = merge<{ name: string }, { key: number }>({ name: 'key', }, { key: 1 }) //But this is redundant 
console.log(mergedObj2);

interface Lengthy {
    length: number
}

function countAndDesc<T extends Lengthy>(element: T) {
    let desc = 'Got no elements'
    if (element.length > 0) {
        desc = 'Got ' + element.length + ' elements'
    }
    return [element, desc]
}

console.log(countAndDesc("Hello"));
console.log(countAndDesc(["Hello", "there"])); //Automatically adjusts the signature

//----------------------------------------------------------------------------------------------------------
//Constraints

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { // keyof is builtin ....key in the object
    return 'value: ' + obj[key]
}
extractAndConvert({ name: 'Sanket' }, 'name')

//------------------------------------------------------------------------------------------------------
//Generic Class

class StorageFunc<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1)
            return
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItem() {
        return [...this.data]
    }
}
const textStorage = new StorageFunc<string | number>()
textStorage.addItem("Hello")
textStorage.addItem("Sanket")
textStorage.addItem(10)
textStorage.removeItem('Sanket')
console.log(textStorage.getItem());

//----------------------------------------------------------------------
// Utilities


//1.Partials
interface CourseGoal {
    title: string,
    desc: string,
    deadline: Date
}
function createCourseGoal(title: string, desc: string, deadline: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.desc = desc
    courseGoal.deadline = deadline

    return courseGoal as CourseGoal
}

//2.Readonly
const names: Readonly<string[]> = ['max', 'sanket']
// names.push('lokesh') error


