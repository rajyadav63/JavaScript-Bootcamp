//creation of promise
function getData() {
    return new Promise((resolve, reject) => {
        let pass = false;
        setTimeout(() => {
            if (pass) {
                resolve("Passed");
            } else {
                reject("Failed");
            }
        }, 3000)
    })
}

// let response = getData();
// console.log(response);

//consume promise
getData()
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.error(msg);

    })