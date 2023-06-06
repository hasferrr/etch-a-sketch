const container = document.querySelector('#container');
let n;
let grid;

n = 4;
grid = document.createElement('div');

for (let i = 0; i < n; i++) {
    grid.appendChild(document.createElement('div'));
}

for (let i = 0; i < n; i++) {
    grid = grid.cloneNode(true);
    container.appendChild(grid);
}
