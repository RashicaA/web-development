const alice = {
    name: 'alice',
    age: 18,
    printNameAndAge: function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

const introduceAlice = alice.printNameAndAge.bind(alice);

const btn = document.getElementById('intro-btn');

btn.addEventListener('click', function (e) {
    introduceAlice()
    console.log(this)
})