function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ name: "Razz", url: "https://chaicode.com" });
        }, 3000);
    });
}

async function getUserData() {
    try {
        console.log("Fetching data....");
        const userData = await fetchData();
        console.log("Data fetched successfully");

        console.log(userData);
    } catch (error) {
        console.error("Some error fetching");

    }
}

getUserData();



// console.log("start");

// async function getData(data) {
//     setTimeout(() => {
//         console.log(data);
//     }, 2000);
// }

// getData("abc");

// console.log("end");

//fetch API

//scenario:
//prepare url/ api endpoint -> sync
//await => fetch data -> network call -> async
//process data -> sync

// async function getHold() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments');
//     let data = await response.json();
//     console.log(data);
// }
// getHold();
