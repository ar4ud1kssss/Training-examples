const upB = document.querySelector('.up-button')
const downB = document.querySelector('.down-button')
const slides = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector ('.container')

const slidescount = slides.querySelectorAll('div').length
console.log (slidescount - 1)

let activeSlideIndex = 0

upB.addEventListener('click', () => {
    changeSlide('up')
})
downB.addEventListener('click', () => {
    changeSlide('down')
})
sidebar.style.top = `-${(slidescount - 1) * 100}vh`

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidescount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex --
        if (activeSlideIndex < 0){
            activeSlideIndex = slidescount - 1
        }
    }

    const height = container.clientHeight
    console.log (height)
    slides.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}  
