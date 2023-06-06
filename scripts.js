const container = document.querySelector('#container');
const containerWidth = 600

let n;
let grid;

n = 16;

grid = document.createElement('div');
grid.classList.add('grid');
grid.setAttribute('style', `width:${containerWidth}px; height:${containerWidth/n}px;`)

column = document.createElement('div')
column.classList.add('column');
column.setAttribute('style', `width:${containerWidth/n}px; height:${containerWidth/n}px;`)

for (let i = 0; i < n; i++) {
    column = column.cloneNode(true);
    grid.appendChild(column);
}

for (let i = 0; i < n; i++) {
    grid = grid.cloneNode(true);
    container.appendChild(grid);
}
