const board = document.querySelector('#board');
const colors = ['#C6D57E', '#A2416B', '#00A19D', '#FFF8E5', '#FFB344', '#00A19D'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
};

function setColor(event) {
    const element = event.target
    const color = getRendomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
};

function getRendomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
};