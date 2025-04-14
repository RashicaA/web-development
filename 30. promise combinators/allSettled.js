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

Promise.allSettled([fetchUserData(), fetchUserPosts(), fetchUserHobbies()])
    .then(results => {
        console.log(results);
        // [
        //     { status: 'fulfilled', value: { userId: 1, name: 'John Doe' } },
        //     { status: 'fulfilled', value: [ 'Post1', 'Post2' ] },
        //     { status: 'rejected', reason: 'NO hobbies!' }
        //   ]

        results.forEach((result, index) => {
            // success
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} resolved with value : ${result.value} `)
            } else {
                console.log(`Promise ${index + 1} rejected with reasn : ${result.reason} `)

            }
            // Promise 1 resolved with value : [object Object] 
            // Promise 2 resolved with value : Post1,Post2 
            // Promise 3 rejected with reasn : NO hobbies! 
        })
    })