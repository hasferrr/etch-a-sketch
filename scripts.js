const container = document.querySelector('#container');
const containerWidth = 600;
container.style.width = containerWidth + 'px';
container.style.height = containerWidth + 'px';

let grid;
let box;
let color = '#000000';

makeGrid(16);
enableHoverToFill();
enableChangeSizeButton();

function makeGrid(size) {
    if (size > 64) {
        size = 64;
    } else if (size < 1) {
        size = 1;
    }
    size = Math.floor(size);

    grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('style', `width:${containerWidth}px; height:${containerWidth / size}px;`)

    box = document.createElement('div')
    box.classList.add('box');
    box.setAttribute('style', `width:${containerWidth / size}px; height:${containerWidth / size}px;`)

    for (let i = 0; i < size; i++) {
        grid.appendChild(box.cloneNode(true));
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
    const nodeOfDivs = document.querySelectorAll('.box');
    nodeOfDivs.forEach(div => {
        div.addEventListener('mouseover', event => {
            if (color === 'Random') {
                event.target.style.backgroundColor = rgbToHex(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
            } else {
                event.target.style.backgroundColor = color;
            }
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
        } while (typeof (size) !== "number" && size === NaN);
        removeGrid();
        changeGridText(makeGrid(size)); // makeGrid() is side effect and return the size of grid
        enableHoverToFill();
    });
}

function changeGridText(size) {
    const gridText = document.querySelector(".grid-text");
    gridText.textContent = `${size} x ${size} grid`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function rgbToHex(r, g, b) {
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}