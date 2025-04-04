class Pizza1 {

    static totalPizzasMade = 0;

    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
        Pizza1.totalPizzasMade++;

    }
    describeOrder() {
        console.log(`A ${this.crustType} ${this.size} size pizza is ready with ${this.toppings}`)
    }
    hello() {
        console.log("hi")
    }

    static calculateTotalPizzasMade() {
        console.log(`Total pizzas:: ${Pizza1.totalPizzasMade}`)
    }
}

// customerOrder1.hello()
// console.log(customerOrder1.crustType)


// inherotance

class StuffingCrustPizza extends Pizza1 {
    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType); // calls the parent class constructor with super
        this.stuffingType = stuffingType;
    }

    describeStuffingOrder() {
        // console.log(`A ${this.crustType} ${this.size} size pizza is ready with ${this.toppings} and special stuffing ${this.stuffingType}`)
        console.log(`This has extra stuffing ${this.stuffingType}.`)
    }

    // overriding describeOrder ..
    describeOrder() {
        super.describeOrder();
        console.log('im here')
        this.describeStuffingOrder();
    }

}

let customerOrder1 = new Pizza1('olives', 'medium', 'cheese burst');
customerOrder1.describeOrder()

let customerOrder2 = new Pizza1('jalapeno', 'large', 'thin');
customerOrder2.describeOrder()

const customerOrder3 = new StuffingCrustPizza('chilli', 'small', 'pan', 'paneer');
customerOrder3.describeOrder()

Pizza1.calculateTotalPizzasMade()

