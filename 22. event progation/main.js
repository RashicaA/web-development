const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// EVENT BUBBLING phase
// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// });

// parent.addEventListener('click', function () {
//     console.log('parent clicked')
// });

// child.addEventListener('click', function () {
//     console.log('child clicked')
// });

// EVENT CAPTURING phase
// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked  (capturing)')
// }, true);

// parent.addEventListener('click', function () {
//     console.log('parent clicked (capturing)')
// }, true);

// child.addEventListener('click', function () {
//     console.log('child clicked (capturing)')
// }, true);


// example
// click on parent
// parent clicked (capturing)
// main.js:35 grandparent clicked
// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// });

// parent.addEventListener('click', function () {
//     console.log('parent clicked (capturing)')
// });

// child.addEventListener('click', function () {
//     console.log('child clicked (capturing)')
// }, true);


//example - click on parent.
//parent clicked (capturing)
// main.js:51 grandparent clicked
// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// });

// parent.addEventListener('click', function () {
//     console.log('parent clicked (capturing)')
// }, true);

// child.addEventListener('click', function () {
//     console.log('child clicked (capturing)')
// }, true);


// example
// click on child element
// parent clicked (capturing)
// main.js:76 child clicked (capturing)
// main.js:68 grandparent clicked

// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// });

// parent.addEventListener('click', function () {
//     console.log('parent clicked (capturing)')
// }, true);

// child.addEventListener('click', function () {
//     console.log('child clicked (capturing)')
// }, true);



// e.stopPropagation()

// grandparent.addEventListener('click', function () {
//     console.log('grandparent clicked')
// });

parent.addEventListener('click', function (e) {
    console.log('parent clicked')

});

child.addEventListener('click', function (e) {
    console.log('child clicked')
    e.stopImmediatePropagation()
});

child.addEventListener('click', function (e) {
    console.log('child clicked2')

});
