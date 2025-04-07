
// "hello".addPattern('*') '' // h*e*l*l*o
// "food".addPattern('#') '' // f#o#o#d

String.prototype.addPattern = function (pattern) {
    return this.split("").join(pattern);
}

console.log("hello".addPattern("$"))
console.log("food".addPattern("$@#"))


// function addPatternStr(str, pattern) {
//     return str.split("").join(pattern);
// }

// console.log(addPatternStr("hello", '*'))
// console.log(addPatternStr("food", '*@'))