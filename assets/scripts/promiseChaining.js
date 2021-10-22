const multi = () => {
    return new Promise(function(resolve, reject) {
        resolve(1 * 2)
    })


}


multi().then(function(result) {
        console.log(result)
        return result * 2
    })
    .then(function(result) {
        console.log(result)
        return result * 2
    })
    .then(function(result) {
        console.log(result)
        return result * 2
    })
    .then(function(result) {
        console.log(result)
    })



//     or 



// multi().then(function(result) {
//         console.log(result)
//         return new Promise((resolve, reject) => {
//             return resolve(result * 2)
//         })
//     }).then(function(result) {
//         console.log(result)
//         return new Promise((resolve, reject) => {
//             return resolve(result * 2)
//         })
//     }).then(function(result) {
//         console.log(result)
//         return new Promise((resolve, reject) => {
//             return resolve(result * 2)
//         })
//     }).then(function(result) {
//         console.log(result)
//         return new Promise((resolve, reject) => {
//             return resolve(result * 2)
//         })
//     })