//  Promise.all

// Promise.all([p1,p2,p3])
// output – returns a new promise
// resolution – only we can resolve it when all iterables (p1,p2,p3) are resolved successfully. 
// result is an array with results of input promise in the same order.

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

Promise.all([fetchUserData(), fetchUserPosts(), fetchUserHobbies()])
    .then(results => {
        console.log(results);

    })
    .catch(e => {
        console.log("Ann error occurred: ", e); //Ann error occurred:  NO hobbies!
    })