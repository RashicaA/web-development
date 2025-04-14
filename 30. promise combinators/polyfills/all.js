// returns a promise
// takes an array
// maintains order
// reject as soons as either one of input primise rejects
// else resolves for all.
// simulatnaoeus (async) runs.

Promise.myall = function (values) {
    const promise = new Promise(function (resolve, reject) {
        let result = [];
        let total = 0;

        values.forEach((item, index) => {
            Promise.resolve(item)
                .then(res => {
                    // result.push(res); :: INCORRECT (order issue)
                    result[index] = res;
                    total++;

                    if (total === values.length) {
                        resolve(result);
                    }

                })
                .catch((err) => {
                    reject(err)
                })
        })
    });

    return promise;
}


function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId: 1, name: 'John Doe' }), 1000)
    })
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(['Post1', 'Post2']), 200)
    })
}

function fetchUserHobbies() {
    return new Promise((resolve, reject) => {

        setTimeout(() => reject("NO hobbies!"), 2000)
    })
}

// Testcase1
Promise.myall([fetchUserData(), fetchUserPosts()])
    .then(results => {
        console.log(results); // [ { userId: 1, name: 'John Doe' }, [ 'Post1', 'Post2' ] ]

    })
    .catch(e => {
        console.log("Ann error occurred: ", e);
    })


// Testcase 2
Promise.myall([fetchUserData(), fetchUserPosts(), fetchUserHobbies()])
    .then(results => {
        console.log(results);

    })
    .catch(e => {
        console.log("Ann error occurred: ", e); //Ann error occurred:  NO hobbies!
    })