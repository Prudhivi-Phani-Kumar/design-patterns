// Implement a curcuit breaker, that halts the function for x amount time if it fails for y times/count.

const circuitBreaker = (fn, faliureCount, timeTreshold) => {
    let failures = 0;
    let timeSinceLastFailure = 0;
    let isClosed = false;

    return function (...args) {
        if (isClosed) {
            const diff = Date.now() - timeSinceLastFailure;
            if (diff > timeTreshold) {
                isClosed = false;
            } else {
                console.error("Service Unavailable");
                return;
            }
        }

        try {
            const result = fn(...args);
            failures = 0;
            return result;
        } catch (err) {
            failures++;
            timeSinceLastFailure = Date.now();
            if (failures >= faliureCount) {
                isClosed = true;
            }
            console.log(err, "Error");
        }
    }
}


const test = () => {
    let count = 0;
    return function () {
        count++;
        if (count < 4) {
            throw "Failed"
        } else {
            return "hello"
        }
    }
}

let t = test();
let c = circuitBreaker(t, 3, 200);

c();
c();
c();
c();
c();
setTimeout(() => {
    console.log(c());
}, 1000);
