

const accessKey = 'LlUYQn6NuuAWvMZ1IC1gAXfIZjFVAOVGRNPJf3oI4Zc';

const imageList = document.getElementById('image-list');

fetch(`https://api.unsplash.com/photos?client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const imageListItem = document.createElement('div');
            imageListItem.classList.add('image-list-item');

            const img = document.createElement('img');
            img.src = `${item.urls.regular}`;
            img.alt = item.alt_description;
            img.loading = 'lazy';

            imageListItem.appendChild(img);
            imageList.appendChild(imageListItem);
        });
    })
    .catch(error => {
        console.error('Error fetching the images:', error);
    });
