let car = {
    name: "Mercedes Benz",
    color: "Black"
}

function buyCar(price, type) {
    console.log(`${this.color} ${this.name} ${type} costs ${price}.`)
}

buyCar.apply(car, [3000000, 'sports']);

Function.prototype.myApply = function (context = {}, argsArray = []) {
    if (typeof this !== 'function') {
        throw new Error(this, " should be a function.")
    }
    // check argsArray is actually an array.
    if (!Array.isArray(argsArray)) {
        throw new Error(argsArray, " array should be passed as asrguments")
    }

    context.myFunc = this;
    context.myFunc(...argsArray);
}
buyCar.myApply(car, [3000000, 'sports']);
