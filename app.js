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
var combinedAges = combine(1, 2);
console.log(combinedAges);
var combineString = combine("Hello", "World");
console.log(combineString);
