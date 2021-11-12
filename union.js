function combine(n1, n2) {
    var res;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
var variable1 = 'sanket';
var variable2 = 'sanket';
// let variable3: SomethingString ='sailesh' it is now incorrect
if (variable1 === variable2) {
    console.log("Yes it is matching");
}
else {
    console.log("No they are not matching");
}
var combinedAges = combine(1, 2);
console.log(combinedAges);
var aliasCombineFuction = function (a, b) {
    return a + b;
};
console.log(aliasCombineFuction(3, 4));
var combineString = combine("Hello", "World");
console.log(combineString);
