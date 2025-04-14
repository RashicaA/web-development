Promise.myAny = function (promisesArray) {
    const promise = new Promise((resolve, reject) => {

        let rejectedCount = 0;
        let rejections = [];

        promisesArray.forEach((prom, index) => {
            Promise.resolve(prom)
                .then(resolve) // resolve immediatlet on promise resolution
                .catch((error) => {
                    rejections[index] = error;
                    rejectedCount++;
                    if (rejectedCount === promisesArray.length) {
                        reject(new AggregateError(rejections, "All promises were rejected"))
                    }
                })

        })

    });

    return promise;
}

// testcase1
let promises1 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]

Promise.myAny(promises1)
    .then(result => console.log(`resolved with: ${result}`)) // resolved with: 1
    .catch(err => console.log(`Rejected with: ${err}`))

// testcase2

let promises2 = [
    Promise.reject(new Error(`Failed 1`)),
    Promise.reject(new Error(`Failed 2`)),
    Promise.reject(new Error(`Failed 3`)),
]

Promise.myAny(promises2)
    .then(result => console.log(`resolved with: ${result}`))
    .catch(error => {
        console.log(`Rejected with: ${error}`) // Rejected with: AggregateError: All promises were rejected
        if (error instanceof AggregateError) {
            console.log(error.errors);
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}: , ${err.message}`))
        }
    })

// [
//   Error: Failed 1
//   at Object.<anonymous> (/Users/dev/Desktop/web-development/30. promise combinators/polyfills/any.js:39:20)
//   at Module._compile (node:internal/modules/cjs/loader:1256:14)
//   at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//   at Module.load (node:internal/modules/cjs/loader:1119:32)
//   at Module._load (node:internal/modules/cjs/loader:960:12)
//   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//   at node:internal/main/run_main_module:23:47,
// Error: Failed 2
//   at Object.<anonymous> (/Users/dev/Desktop/web-development/30. promise combinators/polyfills/any.js:40:20)
//   at Module._compile (node:internal/modules/cjs/loader:1256:14)
//   at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//   at Module.load (node:internal/modules/cjs/loader:1119:32)
//   at Module._load (node:internal/modules/cjs/loader:960:12)
//   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//   at node:internal/main/run_main_module:23:47,
// Error: Failed 3
//   at Object.<anonymous> (/Users/dev/Desktop/web-development/30. promise combinators/polyfills/any.js:41:20)
//   at Module._compile (node:internal/modules/cjs/loader:1256:14)
//   at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//   at Module.load (node:internal/modules/cjs/loader:1119:32)
//   at Module._load (node:internal/modules/cjs/loader:960:12)
//   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//   at node:internal/main/run_main_module:23:47
// ]
// Error 1: , Failed 1
// Error 2: , Failed 2
// Error 3: , Failed 3