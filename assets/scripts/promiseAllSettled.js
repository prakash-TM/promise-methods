var a = new Promise((resolve, reject) => {
    if (true) {
        resolve("First promise true");
    } else {
        reject("First promise false")
    }
})
var b = new Promise((resolve, reject) => {
    if (true) {
        resolve("second promise true");
    } else {
        reject("second promise false")
    }
})
var c = new Promise((resolve, reject) => {
    if (false) {
        resolve("third promise true");
    } else {
        reject("third promise false")
    }
})


var abc = [a, b, c]


//finding the status

Promise.allSettled(abc).then((out) =>
    out.forEach((out) =>
        console.log("status :", out.status)))


//finding the value

Promise.allSettled(abc).then((out) =>
    out.forEach((out) =>
        console.log("value :", out.value)))

//finding the reason

Promise.allSettled(abc).then((out) =>
    out.forEach((out) =>
        console.log("reason :", out.reason)))




Promise.allSettled(abc).then(out => {
    console.log({ out })
}).catch(err => {
    console.log({ err })
})