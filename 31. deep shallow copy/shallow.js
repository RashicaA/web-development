let zoo = {
    name: "Delhi Zoo",
    location: "CP, New Delhi",
    animals: [
        {
            species: 'leopard',
            eats: "meat"
        },
        {
            species: 'deer',
            eats: "grass"
        },

    ]
};

let copyZoo = zoo;
let shallowZoo = { ...zoo }; // this spread opearor creates shallow copy.
// same as below.
// let shallowZoo = Object.assign(zoo); // this spread opearor creates shallow copy.

// shallowZoo.location = "Mumbai";
// zoo.location = "Mumbai";

// console.log(zoo)
// console.log(copyZoo)
// console.log(shallowZoo);


shallowZoo.animals[0].eats = "GRASS";

console.log(zoo.animals[0]); // { species: 'leopard', eats: 'GRASS' }

console.log(zoo.animals[0] === shallowZoo.animals[0]) // true

console.log(zoo == shallowZoo); // false

