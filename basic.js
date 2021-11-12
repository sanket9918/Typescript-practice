function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log("The result is:" + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
function addHandler(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
var n1 = 2.4;
var n2 = 3.5;
var printResult = true;
var string1 = "hello";
var result = add(n1, n2, printResult, string1);
console.log(result);
addHandler(1, 2, function (res) {
    console.log(res);
});
