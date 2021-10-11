const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#C6D57E', '#A2416B', '#00A19D', '#FFF8E5', '#FFB344', '#00A19D'];

let time = 0;
let score = 0;



startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.dataset.time)
        screens[1].classList.add('up')
        startGame()
    }
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        CreateRandomCircle()
    }
});

// //DEBUG
// startGame();

function startGame() {
    setInterval(decreaseTime, 1000)
    CreateRandomCircle()
    setTime(time)
};

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
};

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
};

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
};

function CreateRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    const color = getRendomColor()
    circle.style.backgroundColor = color

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
};

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
};



function getRendomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
};



// const SQUARES_NUMBER = 600;

// for (let i = 0; i < SQUARES_NUMBER; i++) {
//     const square = document.createElement('div')
//     square.classList.add('square')

//     square.addEventListener('mouseover', setColor)

//     square.addEventListener('mouseleave', removeColor)

//     board.append(square)
// };

// function setColor(event) {
//     const element = event.target
//     const color = getRendomColor()
//     element.style.backgroundColor = color
// };

// function removeColor(event) {
//     const element = event.target
//     element.style.backgroundColor = '#1d1d1d'
//     element.style.boxShadow = `0 0 2px #000`
// };


