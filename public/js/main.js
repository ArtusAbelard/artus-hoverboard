let ladiv = document.getElementById('container')
let colors = ['red', 'yellow', 'green', 'blue', 'purple','pink']
let carer = 500

function removeColor(x) {
   x.style.background = 'rgb(58, 58, 58)'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function Couleur(x) {
    let color = getRandomColor()
    x.style.background = color
}

for(let i = 0; i < carer; i++) {
    let square = document.createElement('div')
    square.setAttribute("class","square")
    square.addEventListener('mouseover', () => {
        Couleur(square)
    })
    square.addEventListener('mouseout', () => {
        removeColor(square)
    })
    ladiv.appendChild(square)
}