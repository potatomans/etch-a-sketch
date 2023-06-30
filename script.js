// make 16x16 grid
container = document.querySelector('.container')

createGrid(16)

function createGrid(num) {
    boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        container.removeChild(box)
    })
    for (i = 0; i < num*num; i++) {
        let box = document.createElement('div')
        box.classList.add('box')
        boxHeight = Math.floor(960 / num)
        box.style.cssText = `box-sizing: border-box; width: ${boxHeight}px; height: ${boxHeight}px; border-color: black; border-style: solid;`
        container.appendChild(box)
    }
    boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'green'
    })
})
    return
}

let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num = prompt('Key in a number from 1 to 100.')
    if (num > 100) {
        num = 100;
    }
    createGrid(num)
})