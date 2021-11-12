// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role:[number,string]
// } = {
//     name: "Sanket",
//     age: 12,
//     hobbies: ['sanket', 'lokesh'],
//     role:[1,'author'] //tuple
// }

enum Role { ADMIN=5, READ, WRITE }; //labels is assigned numbers

const person = {
    name: "Sanket",
    age: 12,
    hobbies: ['sanket', 'lokesh'],
    role:Role.ADMIN
}

// person.role.push('admin')
// person.role[1]=10 

let favourActivity: string[]
favourActivity = person.hobbies

for (const fv of favourActivity) {
    console.log(fv.toUpperCase());

}


console.log(person.name);
