// this keyword in node js - non strict
// scenario1 window
console.log("Scenario1 : ")
console.log(this) // Output - window


// scenario 2 = log(this) -> fn  -> window object

console.log("Scenario2 : ")

function fnGlobal() {
    console.log(this); // window object
}
fnGlobal()


// scenario 3 log(this) -> obj -> fn -->> object itself.
// this inside an object - refers to object itself.
console.log("Scenario 3 :")

var obj = {
    a: 1,
    fn: function () {
        console.log(this); // { a: 1, fn: [Function: fn] }
        console.log(this.a); // 1
    }
}
obj.fn();



// scenario 4: (inside nested functions) this -> obj -> fn -> fn = global object
console.log("Scenrio 4:")

var obj2 = {
    prop: 'Im a property.',
    fn: function () {
        console.log("nested1 ", this); // same as scenario3
        // console.log("nested1 prop", this.prop);
        var nestedFn = function () {
            console.log("nested2 ", this); // window.
            // console.log("nested2 prop", this.prop);
        }
        nestedFn()
    },
}
obj2.fn();
