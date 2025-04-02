'use strict';
// this keyword in node js - non strict
// scenario1 {}
console.log("Scenario1 : ")
console.log(this) // Output : empty object {}


// scenario 2 = log(this) -> fn  -> global object

console.log("Scenario2 : ")

function fnGlobal() {
    console.log(this); // undefined
}
fnGlobal()

// scenario 3 log(this) -> obj -> fn -->> object itself.

console.log("Scenario 3 :")
var obj = {
    a: 1,
    fn: function () {
        console.log(this); // { a: 1, fn: [Function: fn] }
        console.log(this.a) // 1
    }
}
obj.fn();



// scenario 4: this -> obj -> fn -> fn = global object
console.log("Scenrio 4:")

var obj2 = {
    fn: function () {
        console.log("nested1 ", this); //  { fn: [Function: fn] }
        var nestedFn = function () {
            console.log("nested2 ", this); // undefined
        }
        nestedFn()
    },
}
obj2.fn();

var outerObj = {
    innerObj: {
        fn: function () {
            console.log("inside innerObj: ", this) // { fn: [Function: fn] }
        }
    }
}
outerObj.innerObj.fn();
// here above ex = this refers to closest containing object.