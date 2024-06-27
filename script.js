// Ensure the API key and URL are correct
const apiKey = 'LlUYQn6NuuAWvMZ1IC1gAXfIZjFVAOVGRNPJf3oI4Zc';
const apiUrl = `https://api.unsplash.com/search/photos?query=painting&client_id=${apiKey}&per_page=16`;

let images = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
});

async function fetchImages() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        images = data.results.map(image => image.urls.regular);
        displayImages();
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages() {
    const imageGrid = document.getElementById('imageGrid');
    if (!imageGrid) {
        console.error('imageGrid element not found');
        return;
    }
    imageGrid.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imageGrid.appendChild(imgElement);
    });
}