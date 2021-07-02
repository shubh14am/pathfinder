// import React from 'react';

var grid = document.getElementById('mainGrid');

for (let i = 0; i < 20; i++) {
    let node = document.createElement("tr");
    grid.appendChild(node);

    let row = grid.lastChild;

    for (let j = 0; j < 51; j++) {
        node = document.createElement("td");
        let x = i+10;
        let y = j+10;
        let a = x + "" + y;   //id for each cell is 10+i and 10+j

        row.appendChild(node);
        row.lastChild.id = a;
    }
}

