function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log("The result is:" + n1 + n2);
    } else {
        return n1 + n2;
    }

}

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2
    cb(res)
}

const n1 = 2.4
const n2 = 3.5
const printResult = true
const string1 = "hello"

const result = add(n1, n2, printResult, string1)
console.log(result);
addHandler(1, 2, (res) => {
    console.log(res);

})