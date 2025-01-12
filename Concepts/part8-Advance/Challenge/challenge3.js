/* 
Task 1: Async - Await with Promise.all

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async - await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
*/


function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { }, 1000)
        resolve("User Data");
    })
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { }, 3000)
        resolve("Post Data");
    })
}

async function fetchAllData() {
    const [userData, postData] = await Promise.all([fetchUser(), fetchPosts()])
    console.log(userData);
    console.log(postData);

}

fetchAllData()

/* 
Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
*/
function fetchSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => { }, 1000)
        resolve("Fetched Successfully")
    })
}
function fetchFailure() {
    return new Promise((reject) => {
        setTimeout(() => { }, 1000)
        reject("Failed Successfully")
    })
}
async function handlePromises() {
    try {
        const [success, failure] = await Promise.all(fetchSuccess(), fetchFailure());
        console.log(success);
        console.log(failure);

    } catch (error) {
        console.log("error");
    }
}
handlePromises()

/*
Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
*/

let promise = new Promise((resolve) => {
    setTimeout(() => { }, 1000)
    resolve("promised")
})
let timeout = new Promise((resolve, reject) => {
    setTimeout(() => { }, 1000)
    reject("timeout")
})

function fetchWithTimeout(promise, timeout) {

}
//----------------------------------------------------

function fetchWithTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject('Timeout exceeded'), timeout)
    );

    return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}