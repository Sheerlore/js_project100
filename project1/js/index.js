
const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];


container.style.backgroundColor = 'red';

button.addEventListener('click', function () {
    const colorIndex = parseInt(Math.random() * colors.length);
    container.style.backgroundColor = colors[colorIndex];
});


