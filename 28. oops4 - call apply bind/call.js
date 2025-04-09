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
person1.printNameAndAge.call(person2, 'Mumbai', 'India');