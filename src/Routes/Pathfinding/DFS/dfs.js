export function dfs(grid, startNode, finishNode) {
    const ol = [];
    const nulll = [];
    const vis = [];
    ol.push(startNode);
    vis.push(startNode);
    var cNode = startNode;
    while (true) {
        console.log(cNode);
        if (ol.length === 0) {
            return nulll;
        }
        if (cNode == finishNode) {
            return vis;
        }
        if (ol[ol.length - 1].row < 20) {
            cNode = grid[ol[ol.length - 1].row + 1][ol[ol.length - 1].col];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].col < 48) {
            cNode = grid[ol[ol.length - 1].row][ol[ol.length - 1].col + 1];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].row > 0) {
            cNode = grid[ol[ol.length - 1].row - 1][ol[ol.length - 1].col];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].col > 0) {
            cNode = grid[ol[ol.length - 1].row][ol[ol.length - 1].col - 1];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        ol.pop();
    }
}

export function getNodesInShortestPathOrderDFS(grid, startNode, finishNode) {
    const ol = [];
    const nulll = [];
    const vis = [];
    ol.push(startNode);
    vis.push(startNode);
    var cNode = startNode;
    while (true) {
        console.log(cNode);
        if (ol.length === 0) {
            return nulll;
        }
        if (cNode == finishNode) {
            return ol;
        }
        if (ol[ol.length - 1].row < 20) {
            cNode = grid[ol[ol.length - 1].row + 1][ol[ol.length - 1].col];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].col < 48) {
            cNode = grid[ol[ol.length - 1].row][ol[ol.length - 1].col + 1];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].row > 0) {
            cNode = grid[ol[ol.length - 1].row - 1][ol[ol.length - 1].col];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        if (ol[ol.length - 1].col > 0) {
            cNode = grid[ol[ol.length - 1].row][ol[ol.length - 1].col - 1];
            if (!vis.includes(cNode) && !cNode.isWall) {
                ol.push(cNode);
                vis.push(cNode);
                continue;
            }
        }
        ol.pop();
    }
}