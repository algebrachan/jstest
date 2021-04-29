// function* nTimes(n) {
//     for (let i = 0; i < n; ++i) {
//         yield i;
//     }
// }

// function* nTimes(n) {
//     for (let i = 0; i < n;) {
//         yield i++;
//     }
// }

function* nTimes(n) {
    let i = 0;
    while (n--) {
        yield ++i;
    }
}

for (let x of nTimes(3)) {
    console.log(x)
}