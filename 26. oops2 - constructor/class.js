class Person {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name)
    }

    static myMethod() {
        console.log("im static...")
    }
}

const obj1 = new Person('john')
const obj2 = new Person('mark')
obj1.print()
obj2.print()

Person.myMethod(); // works. since static can be called on class itself.
Person.print(); // ERROR TypeError: Person.print is not a function