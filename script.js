document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const paintingsStorage = window.sessionStorage;

    const displayData = (data) => {
        console.log('Data received:', data); // Debugging line
        data.forEach((element, index) => {
            grid.innerHTML += `
            <section class="image-wrapper grid-item">
                <a class="grid-item__link" href="detail.html?painting=${index}" data-id="${element.id}">
                    <div class="grid-item__text">
                        <h2 class="heading heading--2 white">${element.alt_description || 'Untitled'}</h2>
                        <p class="subhead subhead--2 white--opacity">${element.user.name}</p>
                    </div>
                    <img class="grid-item__image" src="${element.urls.small}" alt="${element.alt_description || 'Image'}">
                </a>
            </section>`;
            paintingsStorage.setItem(index, JSON.stringify(element));
        });

        Macy({
            container: '.grid',
            columns: 4,
            margin: 40,
            breakAt: {
                1100: 3,
                840: 2,
                600: 1,
            },
            waitForImages: true,
        });
    };

    fetch('https://api.unsplash.com/photos/?client_id=LlUYQn6NuuAWvMZ1IC1gAXfIZjFVAOVGRNPJf3oI4Zc')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
});
