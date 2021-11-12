type MyCombineFuction = string | number

type SomethingString = 'sanket' | 'lokesh' //literal types

function combine(n1: number | string, n2: number | string): MyCombineFuction { //Union type
    let res
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2
    } else {
        res = n1.toString() + n2.toString()
    }
    return res
}

let variable1 = 'sanket'

let variable2: SomethingString ='sanket'
// let variable3: SomethingString ='sailesh' it is now incorrect
if (variable1 === variable2) {
    console.log("Yes it is matching");
    
} else {
    console.log("No they are not matching");
    
}


const combinedAges = combine(1, 2)
console.log(combinedAges);

let aliasCombineFuction: (a: number, b: number) => number = (a,b) => {
    return a+b
}
console.log(aliasCombineFuction(3,4));


const combineString = combine("Hello", "World")
console.log(combineString);
