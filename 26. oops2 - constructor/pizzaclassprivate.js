class Pizza2 {

    static totalPizzasMade = 0;
    // #toppings;  // private property.
    #size; // private property.
    #crustType; // private property.
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.#size = size;
        this.#crustType = crustType;
        Pizza2.totalPizzasMade++;

    }
    describeOrder = function () {
        console.log(`A ${this.#crustType} ${this.#size} size pizza is ready with ${this.toppings}`)
    }
    hello() {
        console.log("hi")
    }

    static calculateTotalPizzasMade() {
        console.log(`Total pizzas:: ${Pizza2.totalPizzasMade}`)
    }
}

// customerOrder1.hello()
// console.log(customerOrder1.crustType)


// inherotance

class StuffingCrustPizza extends Pizza2 {
    #stuffingType;
    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType); // calls the parent class constructor with super
        this.#stuffingType = stuffingType;
    }

    describeStuffingOrder() {
        // console.log(`A ${this.crustType} ${this.size} size pizza is ready with ${this.toppings} and special stuffing ${this.stuffingType}`)
        console.log(`This has extra stuffing ${this.#stuffingType}.`)
    }

    // overriding describeOrder ..
    describeOrder() {
        super.describeOrder();
        console.log('im here')
        this.describeStuffingOrder();
    }

}

let customerOrder1 = new Pizza2('olives', 'medium', 'cheese burst');
customerOrder1.describeOrder()

let customerOrder2 = new Pizza2('jalapeno', 'large', 'thin');
customerOrder2.describeOrder()

const customerOrder3 = new StuffingCrustPizza('chilli', 'small', 'pan', 'paneer');
console.log(customerOrder3.toppings) // chilli
console.log(customerOrder3.stuffingType) // undefined ( as it is private )
console.log(customerOrder3.#stuffingType) // SyntaxError: Private field '#stuffingType' must be declared in an enclosing class

Pizza2.calculateTotalPizzasMade()

