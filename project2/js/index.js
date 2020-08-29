
const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const hexText = document.querySelector('#hexValue');

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const c = Math.floor(Math.random() * colors.length);
        hex += colors[c];
    }
    hexText.textContent = hex;
    container.style.backgroundColor = hex;
});

