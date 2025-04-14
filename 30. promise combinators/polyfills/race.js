Promise.myRace = function (promisesArray) {

    const promise = new Promise((resolve, reject) => {
        if (promisesArray.length === 0) {
            throw new TypeError(`Cannot perform promise.race on empty array`)
        }
        promisesArray.forEach(prom => {
            Promise.resolve(prom)
                .then(resolve)
                .catch(reject)
        })
    })

    return promise;

}

function quickResolve() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Quickly resolved"), 500);
    });
}

function slowResolveOrFastReject() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve("Slowly resolved"), 2000);
        setTimeout(() => reject(new Error("Quickly rejected")), 1000);
    });
}

Promise.myRace([quickResolve(), slowResolveOrFastReject()])
    .then(result => {
        console.log("result: ", result)
    })
    .catch(error => {
        console.log("Error: ", error)
    })

