const API_URL = [
    {
        url: "https://images.pexels.com/photos/3652805/pexels-photo-3652805.jpeg",
        title: "Photo of Cat's Face"
    },
    {
        url: "https://images.pexels.com/photos/4790612/pexels-photo-4790612.jpeg",
        title: "Cute Fluffy Cat Near an Open Door"
    },
    {
        url: "https://images.pexels.com/photos/10914514/pexels-photo-10914514.jpeg",
        title: "Photograph of a Ragdoll Kitten Playing with a Toy"
    }
];

const apiGallery = document.getElementById('apiGallery');
API_URL.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = image.title; 
    imgElement.classList.add('api-gallery-image');
    apiGallery.appendChild(imgElement);
});