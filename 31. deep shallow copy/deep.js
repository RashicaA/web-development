// using JSON.stringify & JSON.parse

// for deep copy, we convert obj to string and back again to obj.

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
            eats: "grass",
            attributes: {
                color: 'brown'
            }
        },

    ]
};

let zooStr = JSON.stringify(zoo);
let deepZoo = JSON.parse(zooStr);
// let deepZoo2 = JSON.parse(JSON.stringify(zoo));

deepZoo.animals[0].eats = "GRASS";
console.log(zoo.animals[0]); // { species: 'leopard', eats: 'meat' }

zoo.animals[1].attributes.color = 'black';

console.log(zoo.animals[1].attributes.color); // black
console.log(deepZoo.animals[1].attributes.color) // brown


