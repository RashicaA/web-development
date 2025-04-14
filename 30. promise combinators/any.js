function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected fast")), 300);
    });
}

function rejectSlow() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Rejected slow")), 1500);
    });
}

Promise.any([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlow()])
    .then(result => {
        console.log(`Result: ${result}`); // Result: Resolved quickly
    })
    .catch(error => {
        console.log(`Error: ${error}`);
        if (error instanceof AggregateError) {
            console.log(error.errors);
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}: , ${err.message}`))
        }
    })

Promise.any([rejectFast(), rejectSlow()])
    .then(result => {
        console.log(`Result: ${result}`); // Result: Resolved quickly
    })
    .catch(error => {
        console.log(`Error: ${error}`); // Error: AggregateError: All promises were rejected
        if (error instanceof AggregateError) {
            console.log(error.errors);
            // [
            //   Error: Rejected fast
            //   at Timeout._onTimeout (/Users/dev/Desktop/web-development/30. promise combinators/any.js:15:33)
            //   at listOnTimeout (node:internal/timers:569:17)
            //   at process.processTimers (node:internal/timers:512:7),
            // Error: Rejected slow
            //   at Timeout._onTimeout (/Users/dev/Desktop/web-development/30. promise combinators/any.js:21:33)
            //   at listOnTimeout (node:internal/timers:569:17)
            //   at process.processTimers (node:internal/timers:512:7)
            // ]
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}: , ${err.message}`));
            // Error 1: , Rejected fast
            // Error 2: , Rejected slow
        }
    })

