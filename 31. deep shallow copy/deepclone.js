// deep clone polyfill

function deepClone(obj) {
    // only work for type  of objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // check for array.

    if (Array.isArray(obj)) {
        // if(obj instanceof Array){

        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Function) {
        return obj.bind({});
    }

    if (obj instanceof Object) {
        let copy = {};
        for (let key in obj) {
            copy[key] = deepClone(obj[key])
        }
        return copy;
    }
}

let person = {
    name: 'john',
    age: 20,
    qualities: {
        height: 'tall',
        hobbies: ['reading', "watching movies"]
    },
    sayhello() {
        console.log(`Hi, I am ${this.name} and ${this.age} years old.`)
    }
}

const newPerson = JSON.parse(JSON.stringify(person))
// console.log("person: ", person)
// person:  {
//   name: 'john',
//   age: 20,
//   qualities: { height: 'tall', hobbies: [ 'reading', 'watching movies' ] },
//   sayhello: [Function: sayhello]
// }

// console.log("newPerson: ", newPerson);
// newPerson:  {
//     name: 'john',
//     age: 20,
//     qualities: { height: 'tall', hobbies: [ 'reading', 'watching movies' ] }
//   }

// console.log(newPerson.sayhello); // undefined


const deepPerson = deepClone(person);

person.name = 'jill'
person.age = 40,
    person.qualities = { height: 'short', hobbies: ['none'] }
person.sayhello = "im string now"
console.log(deepPerson)
console.log(person)