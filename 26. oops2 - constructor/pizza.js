function Pizza(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;

    this.describeOrder = function () {
        console.log(`A ${this.crustType} ${this.size} size pizza is ready with ${this.toppings}`)
    }

    this.hello = function () {
        console.log("hi")
    }
}

let customerOrder1 = new Pizza('olives', 'medium', 'cheese burst');
let customerOrder2 = new Pizza('jalapeno', 'large', 'thin');

customerOrder1.describeOrder()
customerOrder1.hello()
console.log(customerOrder1.crustType)
customerOrder2.describeOrder()
