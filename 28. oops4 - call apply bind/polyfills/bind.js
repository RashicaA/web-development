
Function.prototype.myBind = function (context, ...boundArgs) {
    if (typeof this !== 'function') {
        throw new Error(this, " should be a function.")
    }

    const targetFunction = this;

    return function (...args) {
        console.log("this in nested return function", this)
        return targetFunction.apply(context, [...boundArgs, ...args])
        // return this.apply(context, [...boundArgs, ...args]) // error, since this is global in nested scanrios.
    }
}

let car = {
    name: "Mercedes Benz",
    color: "Black"
}

function buyCar(price, type) {
    console.log(`${this.color} ${this.name} ${type} costs ${price}.`)
}

const myBuyCar = buyCar.bind(car, "300000")
const myBuyCar2 = buyCar.myBind(car, "300000")

myBuyCar("sports")
myBuyCar2("eco")