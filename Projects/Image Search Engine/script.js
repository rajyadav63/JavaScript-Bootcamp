let accessKey = "hLFtg0cbgohDCIvZu74--s6hImC1uR1WNCBc32Zsovo";

const imageSearchForm = document.getElementById('image-search-form');
const imageSearch = document.getElementById('search-image');
const searchButton = document.getElementById('search-btn');
const showImageResult = document.getElementById('search-result');
const showMore = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

const url = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=hLFtg0cbgohDCIvZu74--s6hImC1uR1WNCBc32Zsovo";

async function getImages() {
    try {
        keyword = imageSearch.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

        const response = await fetch(url);
        const data = await response.json();

        //if only page, let me search another things
        if (page === 1) {
            showImageResult.innerText = "";  //this will empty searchbox
        }

        // Display images => results act as array
        data.results.forEach((result) => {
            const image = document.createElement('img');  //create img
            image.src = result.urls.small;    //add src to img
            const imageLink = document.createElement('a');  //get img link
            imageLink.href = result.links.html;   //insert link
            imageLink.target = "_blank";
            imageLink.appendChild(image);
            showImageResult.appendChild(imageLink);
        });

        showMore.style.display = 'block';

    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

imageSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    getImages();
})

showMore.addEventListener('click', () => {
    page++;
    getImages();
})
