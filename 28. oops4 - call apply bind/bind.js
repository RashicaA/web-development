// const alice = {
//     name: 'alice',
//     age: 18,
//     printNameAndAge: function () {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// const introduceAlice = alice.printNameAndAge.bind(alice);

// const btn = document.getElementById('intro-btn');

// btn.addEventListener('click', function (e) {
//     introduceAlice()
//     console.log(this)
// })


let user = {
    name: 'Alice',
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
const user2 = {
    name: 'Bob',
    age: 30
};
// We need this function to always use `user` as its context
let boundGreet = user.greet.bind(user);
const boundGreet2 = user.greet.bind(user2);
// Now, no matter how we call `boundGreet`, it always logs the correct message.
boundGreet(); // Outputs: Hello, my name is Alice and I am 25 years old.
boundGreet2(); // Outputs: Hello, my name is Bob and I am 30 years old.