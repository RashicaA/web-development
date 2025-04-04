// function add(a, b) {
//     console.log("hello")
//     return a + b;
// }
// console.log(add(1, 2))

// const add2 = (a, b) => a + b;

// console.log(add2(1, 2))

// const add3 = (a, b) => {
//     console.log("hello");
//     return a + b;
// }
// console.log(add3(1, 2))


// // this in arrow functions

// const person = {
//     name: 'john doe',
//     arrow: () => console.log(`arrow: ${this.name}`),
//     fn: function () {
//         console.log(`regular: ${this.name}`)
//     }
// }

// console.log(person.fn()) // john
// console.log(person.arrow()) // undefined


// usefulness of this in arrow.

const person2 = {
    name: 'jane',
    eventuallySayName: function () {
        function actuallySayName() {
            console.log(`first: ${this.name}`); // undefined, since in nested func, this is global/window.
        }

        const actuallySayNameArrow = () => {
            console.log(`second: ${this.name}`) // jane
        }

        actuallySayName();
        actuallySayNameArrow();
    },
}

person2.eventuallySayName();

