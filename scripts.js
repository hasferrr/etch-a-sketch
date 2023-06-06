const container = document.querySelector('#container');
const containerWidth = 600;
container.style.width = containerWidth + 'px';
container.style.height = containerWidth + 'px';

let grid;
let column;
let color = 'black';

makeGrid(16);
enableHoverToFill();
enableChangeSizeButton();

function makeGrid(size) {
    if (size > 50) {
        size = 50;
    } else if (size < 1) {
        size = 1;
    }
    size = Math.floor(size);

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

    return size;
}

function removeGrid() {
    const nodeOfRows = document.querySelectorAll('.grid');
    nodeOfRows.forEach(row => {
        container.removeChild(row);
    });
}

function enableHoverToFill() {
    const nodeOfDivs = document.querySelectorAll('.column');
    nodeOfDivs.forEach(div => {
        div.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = color;
        });
    });
}

function enableChangeSizeButton() {
    const changeSizeButton = document.querySelector('.change-size');
    changeSizeButton.addEventListener('click', () => {
        let size;
        do {
            size = prompt("New Size: ");
            if (size === null) {
                return;
            }
        } while (typeof(size) !== "number" && size === NaN);
        removeGrid();
        changeGridText(makeGrid(size)); // makeGrid() is side effect and return the size of grid
        enableHoverToFill();
    });
}

function changeGridText(size) {
    const gridText = document.querySelector(".grid-text");
    gridText.textContent = `${size} x ${size} grid`;
}