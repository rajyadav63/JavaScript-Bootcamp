let promise = new Promise(function (res, rej) {
    setTimeout(function () {
        console.log("hii");
    }, 10000);
    rej(new Error("something wrong"));
});


let promise = new Promise((resolve, reject) => {
    let isLogged = false;
    if (isLogged) {
        resolve("Logged 1")
    } else {
        reject(" Not Logged 1")
    }
});

promise
    .then(function (messege) {
        console.log('Messeged recieved ' + messege);
        return `2`
    }).then((messege) => {
        console.log("recieved 2nd messege " + messege);
        return `3`
    }).then((messege) => {
        console.log("messege 3rd is: " + messege);
    })
    .catch((error) => {
        console.log("Not logged " + error);
        throw new Error('2');
    }).catch((error) => {
        console.log("not logged " + error);
        throw new Error('3');
    }).catch((error) => {
        console.log("Not logged " + error);
        // throw new Error('3');
    }).finally((messege) => {
        console.log("finnaly done with result");
    })


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "third");
})

Promise.all([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);

    })

async function promoseAll() {
    try {
        const [pr1, pr2, pr3] = await Promise.allSettled([promise1, promise2, promise3]);
        console.log(pr1, pr2, pr3);

    } catch (error) {
        console.error("Error promise");

    }

}
promoseAll()

function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "first");
    })
}

function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 4000, "second");
    })
}

function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, "third");
    })
}

async function promoseAll() {
    try {
        const [one, two, three] = await Promise.all([promise1(), promise2(), promise3()])
        console.log(one);
        console.log(two);
        console.log(three);

    } catch (error) {
        console.error("Error");

    }
}
promoseAll()
