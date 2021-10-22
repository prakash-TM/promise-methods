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


// use var abc=[a,b,c] , put abc in promise.all(abc).then.........

Promise.all([a, b, c]).then(out => {
    console.log(out)
}).catch(err => {
    console.log(err)
})




// Promise.all([a, b, c]).catch(err => {
//     console.log(err)
// })