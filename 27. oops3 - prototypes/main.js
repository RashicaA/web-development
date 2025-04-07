const person = {
    name: 'john doe',
    log: function () {
        console.log('here...')
    }
};

console.log(person)

// hasOwnProperty returns true if a particlaur property 
// is a direct property of that object
console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("age"))
person.log()


// using prototype...


function Car(model, year) {
    this.model = model;
    this.year = year;

    this.displayInfoOld = function () {
        return `This is a ${this.year} ${this.model}`
    }
}

Car.prototype.displayInfo = function () {
    return `This is a ${this.year} ${this.model}`
}

// Setting a generic method via __proto__ [not recommended]
Car.prototype.__proto__.displayGenericInfo = function () {
    return `This is from year ${this.year}.`
}

let car1 = new Car("Kia Sonet", 2025);
let car2 = new Car("Tata Nexon", 2022);

// console.log(car1.displayInfoOld());
// console.log(car2.displayInfo());
// console.log(car1.displayGenericInfo());
// console.log(car2.displayGenericInfo());
// console.log(car1)