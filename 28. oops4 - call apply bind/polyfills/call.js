let car = {
    name: "Mercedes Benz",
    color: "Black"
}

function buyCar(price, type) {
    console.log(`${this.color} ${this.name} ${type} costs ${price}.`)
}

// buyCar.call(car, 3000000, 'sports');

// polyfill of .call

// ...args 
Function.prototype.myCall = function (context = {}, ...args) {
    // context ->> car

    if (typeof this !== 'function') {
        throw new Error(this + 'is not callable. It shuld be a function')
    }
    console.log(this); // [Function: buyCar]

    context.myFunc = this;

    context.myFunc(...args)

}

buyCar.myCall(car, 3000000, 'sports');
