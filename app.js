let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
];

let currentIndex = 0;

function updateBackground() {
    let background = document.getElementById('background');
    background.style.backgroundImage = `url(${images[currentIndex]})`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
});

updateBackground();
