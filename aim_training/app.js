const start = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list') 
const timeEl = document.querySelector('#time')
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','chocolate','cadetblue','beige','deeppink']
const board = document.querySelector('#board')
const reload = document.querySelector('.reload')

let time = 0
let score = 0

start.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) =>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

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
}
function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1> <a href="#" class = "reload" onclick="location.reload()">Заново</a>`
    timeEl.parentNode.remove()
    board.style.flexDirection = 'column'
}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber(10, 65)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = getColor()
    circle.style.background = color
    board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}