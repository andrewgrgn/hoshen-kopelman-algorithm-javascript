function rasterAndLabel(grid) {
    if(!isGridValid(grid)) {
        throw new Error("Provided grid is invalid!");
    }

    const M = grid.length, N = grid[0].length;
    const labelGrid = grid.map(row => row.map(_ => null));
    const labels = [];
    for (let i = 0; i < M * N; i++) {
        labels.push(i);
    }
    let largestLabel = 0;
    let left, above;
    for (let x = 0; x < M; x++) {
        for (let y = 0; y < N; y++) {
            if (grid[x][y]) { /* field occupied */
                above = (grid[x - 1] !== undefined) && grid[x - 1][y]; /* one element to the top */
                left = grid[x][y - 1]; /* one element to the left */

                if (!left && !above) { /* No neighbours */
                    largestLabel = largestLabel + 1;
                    labelGrid[x][y] = largestLabel;
                } else if (left && !above) { /* One neighbour to the left */
                    labelGrid[x][y] = find(labelGrid[x][y - 1]);
                } else if (!left && above) { /* One neighbour to the top */
                    labelGrid[x][y] = find(labelGrid[x - 1][y]);
                } else { /* Both neighbours present */
                    union(labelGrid[x][y - 1], labelGrid[x - 1][y]);
                    merge(labelGrid[x], y, largestLabel, find(labelGrid[x][y - 1])); /* merge all corresponding elements to the left */
                    labelGrid[x][y] = find(labelGrid[x][y - 1]);
                }
            }
        }
    }

    function merge(labelGridRow, endIndex, label, replaceWith) {
        for (let i = 0; i < endIndex; i++) {
            if (labelGridRow[i] === label) {
                labelGridRow[i] = replaceWith;
            }
        }
    }

    function union(x, y) {
        labels[find(x)] = find(y);
    }

    function find(x) {
        let y = x;
        while (labels[y] !== y)
            y = labels[y];

        while (labels[x] !== x) {
            let z = labels[x];
            labels[x] = y;
            x = z;
        }
        return y;
    }

    return labelGrid;
}

/* Every grids row should have the same number of cols */
function isGridValid(grid) {
    let isLengthConstant = true;
    grid.forEach((row, index) => {
        if (index > 0) {
            isLengthConstant = isLengthConstant && (row.length === grid[index -1].length);
        }
    });
    return isLengthConstant;
}