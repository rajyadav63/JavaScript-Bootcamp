// const url = "http://localhost:3000/api/quotes/random";

// const { log } = require("console");

console.log("Starting...");

const url = "https://api.quotable.io/random";
console.log("url given");


async function getRandomQuote(url) {
    try {
        const response = await fetch(url);
        console.log("response");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const quote = await response.json();
        console.log(quote);

        console.log(quote.content);
    } catch (error) {
        console.error("Error fteching quote", error);
    }

};
getRandomQuote(url)





