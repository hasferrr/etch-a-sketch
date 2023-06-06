const container = document.querySelector('#container');
const containerWidth = 600;

let grid;
let column;
let color = "orange";

makeGrid(16);
hoverToFill();

function makeGrid(size) {
    grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('style', `width:${containerWidth}px; height:${containerWidth / size}px;`)

    column = document.createElement('div')
    column.classList.add('column');
    column.setAttribute('style', `width:${containerWidth / size}px; height:${containerWidth / size}px;`)

    for (let i = 0; i < size; i++) {
        grid.appendChild(column.cloneNode(true));
    }

    for (let i = 0; i < size; i++) {
        container.appendChild(grid.cloneNode(true));
    }
}

function hoverToFill() {
    const nodeOfDivs = document.querySelectorAll('.column');
    nodeOfDivs.forEach(div => {
        div.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = color;
        })
    })
}