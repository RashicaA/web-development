let toys = {
    toy1: {
        "name": 'Chess',
        "price": 200
    },
    toy2: {
        "name": "Mechanics",
        "price": 1000
    }
}
console.log(typeof toys)
let toysToString = JSON.stringify(toys);
console.log(typeof toysToString)
console.log(toysToString)

let unpackedToys = JSON.parse(toysToString);

console.log(unpackedToys)
console.log(typeof unpackedToys)
