var a = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("First promise true");
        } else {
            reject("First promise false")
        }
    }, 5000)


})
var b = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("second promise true");
        } else {
            reject("second promise false")
        }
    }, 6000);

})
var c = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("third promise true");
        } else {
            reject("third promise false")
        }

    }, 1000);

})


// use var abc=[a,b,c] , put abc in promise.all(abc).then.........

var abc = [a, b, c]

Promise.any(abc).then(out => {
    console.log(out)
})

// output is "third promise true"


// Promise.all([a, b, c]).catch(err => {
//     console.log(err)
// })



// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));