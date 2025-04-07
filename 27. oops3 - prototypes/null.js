let obj = {
    name: 'john',
    age: 25
}

console.log(obj)
console.log(typeof obj)
console.log(obj.toString())
console.log(typeof obj.toString())

// detaches object from its prototype chain...
obj.__proto__ = null;

console.log("__proto__ set to null now...")
console.log(obj)
console.log(obj.toString()) // error.

