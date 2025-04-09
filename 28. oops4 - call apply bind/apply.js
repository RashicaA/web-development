const person1 = {
    name: 'john',
    age: 25,
    printNameAndAge: function (location, country) {
        console.log(`My name is ${this.name} and I am ${this.age} years old from ${location}, ${country}.`)
    }
}

const person2 = {
    name: 'jill',
    age: 18,
    job: 'sde'
}

person1.printNameAndAge('Delhi', 'Ind');
person1.printNameAndAge.apply(person2, ['Mumbai', 'India']);


// find maximum number in an array..

const numbers = [5, 6, 2, 1, 9];

console.log(Math.max.call(null, 5, 6, 2, 1, 9));
console.log(Math.max.apply(null, numbers)); // better aprroach
// another way withiut call, apply
console.log(Math.max(...numbers))
