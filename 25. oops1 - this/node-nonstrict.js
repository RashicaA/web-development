// this keyword in node js - non strict
// scenario1 global 
console.log("Scenario1 : ")
console.log(this) // Output : {}

// scenario 2 = log(this) -> fn  -> global object

console.log("Scenario2 : ")

function fnGlobal() {
    console.log(this); // global object
}
fnGlobal()

// scenario 3 log(this) -> obj -> fn -->> object itself.

console.log("Scenario 3 :")
var obj = {
    a: 1,
    fn: function () {
        console.log(this); // { a: 1, fn: [Function: fn] }
    }
}
obj.fn();


// scenario 4: this -> obj -> fn -> fn = global object
console.log("Scenrio 4:")

var obj2 = {
    fn: function () {
        console.log("nested1 ", this);
        var nestedFn = function () {
            console.log("nested2 ", this);
        }
        nestedFn()
    },
}
obj2.fn();