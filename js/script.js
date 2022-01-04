const color = document.querySelector("input[type=color]")
const btn = document.querySelector(".btn")
const colorVal = '--color'
const colorHTML = document.querySelector('#colorHTML')

color.value = '#0000ff'


btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(color.value)
    document.documentElement.style.setProperty(colorVal, color.value)
    colorHTML.innerHTML = color.value
})