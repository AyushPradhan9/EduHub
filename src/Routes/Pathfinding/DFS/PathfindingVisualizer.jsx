import React, { Component } from "react";
import Node from "../nodeUtils/Node.jsx";
import { dfs, getNodesInShortestPathOrderDFS } from "./dfs.js";
import { Button } from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../PathfindingVisualizer.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      grid: [],
      mouseIsPressed: false,
      disabled: false,
    };
    this.state = this.initialState;
  }
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDFS(visitedNodesInOrder, nodesInShortestPathOrder) {
    this.setState({ disabled: !this.state.disabled });
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 40 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 40 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    if (nodesInShortestPathOrder.length <= 1) {
      setTimeout(() => {
        document.getElementById(
          `node-${START_NODE_ROW}-${START_NODE_COL}`
        ).className = "node node-initial-mark-ca";
      }, 50 * 0);
    } else {
      setTimeout(() => {
        document.getElementById(
          `node-${START_NODE_ROW}-${START_NODE_COL}`
        ).className = "node node-initial-mark";
      }, 50 * 0);
    }
    for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const node2 = nodesInShortestPathOrder[i + 1];
        var last_row = node.row;
        var last_col = node.col;
        var currRow = node2.row;
        var currCol = node2.col;
        if (currRow === last_row - 1) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path-up";
        } else if (currRow === last_row + 1) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path-down";
        } else if (currCol === last_col - 1) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path-left";
        } else {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path-right";
        }
      }, 50 * i);
    }
    if (nodesInShortestPathOrder.length <= 1) {
      setTimeout(() => {
        document.getElementById(
          `node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`
        ).className = "node node-final-mark-nf";
      }, 50 * 0);
    } else {
      setTimeout(() => {
        document.getElementById(
          `node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`
        ).className = "node node-final-mark";
      }, 50 * (nodesInShortestPathOrder.length - 1));
    }
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 50 * (nodesInShortestPathOrder.length + 3));
  }

  visualizeDFS() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dfs(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(finishNode);
    this.animateDFS(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  resetMaze() {
    this.componentDidMount();
    const { grid, mouseIsPressed } = this.state;
    return (
      <>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  if (
                    !((row === 10 && col === 5) || (row === 10 && col === 35))
                  ) {
                    const newGrid = getNewGridWithWallToggledOff(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node";
                    this.setState(this.state);
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row === 10 && col === 5) {
                    const newGrid = getNewGridWithStart(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-start";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={true}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row === 10 && col === 35) {
                    const newGrid = getNewGridWithEnd(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-finish";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={true}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  createRandomMaze() {
    this.rM();
    let count = 300;
    let i = 0;
    const { grid, mouseIsPressed } = this.state;
    return (
      <>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  i += 1;
                  const { row, col, isFinish, isStart, isWall } = node;
                  if (row === 0 || row === 20 || col === 0 || col === 39) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-wall";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (
                    !(
                      (row === 10 && col === 5) ||
                      (row === 10 && col === 35)
                    ) &&
                    count > 0
                  ) {
                    let ch = randomIntFromInterval(0, 2);
                    if (ch === 1) {
                      const newGrid = getNewGridWithWallToggledOn(
                        this.state.grid,
                        row,
                        col
                      );
                      document.getElementById(
                        `node-${node.row}-${node.col}`
                      ).className = "node node-wall";
                      this.setState({ grid: newGrid });
                      count -= 1;
                      return (
                        <Node
                          key={nodeIdx}
                          col={col}
                          isFinish={isFinish}
                          isStart={isStart}
                          isWall={true}
                          mouseIsPressed={mouseIsPressed}
                          onMouseDown={(row, col) =>
                            this.handleMouseDown(row, col)
                          }
                          onMouseEnter={(row, col) =>
                            this.handleMouseEnter(row, col)
                          }
                          onMouseUp={() => this.handleMouseUp()}
                          row={row}
                        ></Node>
                      );
                    } else {
                      const newGrid = getNewGridWithWallToggledOff(
                        this.state.grid,
                        row,
                        col
                      );
                      document.getElementById(
                        `node-${node.row}-${node.col}`
                      ).className = "node";
                      this.setState({ grid: newGrid });
                      return (
                        <Node
                          key={nodeIdx}
                          col={col}
                          isFinish={isFinish}
                          isStart={isStart}
                          isWall={false}
                          mouseIsPressed={mouseIsPressed}
                          onMouseDown={(row, col) =>
                            this.handleMouseDown(row, col)
                          }
                          onMouseEnter={(row, col) =>
                            this.handleMouseEnter(row, col)
                          }
                          onMouseUp={() => this.handleMouseUp()}
                          row={row}
                        ></Node>
                      );
                    }
                  } else if (
                    !(
                      (row === 10 && col === 5) ||
                      (row === 10 && col === 35)
                    ) &&
                    count <= 0
                  ) {
                    const newGrid = getNewGridWithWallToggledOff(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row === 10 && col === 5) {
                    const newGrid = getNewGridWithStart(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-start";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row === 10 && col === 35) {
                    const newGrid = getNewGridWithEnd(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-finish";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  rM() {
    this.setState(this.state);
    var id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
    window.clearTimeout(id);
    this.resetMaze();
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  createVerticalMaze() {
    this.rM();
    const grid1 = getInitialGrid();
    this.setState({ grid1 });
    const { grid, mouseIsPressed } = this.state;
    return (
      <>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  if (row === 0 || row === 20 || col === 0 || col === 39) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-wall";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (col % 4 === 0 && row !== 19) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-wall";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (col % 2 === 0 && col % 4 !== 0 && row !== 1) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-wall";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (
                    row === START_NODE_ROW &&
                    (col === START_NODE_COL || col === FINISH_NODE_COL)
                  ) {
                    const newGrid = getNewGridWithWallToggledOff(
                      this.state.grid,
                      row,
                      col
                    );
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else {
                    const newGrid = getNewGridWithWallToggledOff(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  createHorizontalMaze() {
    this.rM();
    const grid1 = getInitialGrid();
    this.setState({ grid1 });
    const { grid, mouseIsPressed } = this.state;
    let i = 1;
    return (
      <>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  if (row === 0 || row === 20 || col === 0 || col === 39) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-mazecr";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row % 4 === 0 && col !== 38) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-mazecr";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else if (row % 2 === 0 && row % 4 !== 0 && col !== 1) {
                    const newGrid = getNewGridWithWallToggledOn(
                      this.state.grid,
                      row,
                      col
                    );
                    document.getElementById(
                      `node-${node.row}-${node.col}`
                    ).className = "node node-mazecr";
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={true}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  } else {
                    const newGrid = getNewGridWithWallToggledOff(
                      this.state.grid,
                      row,
                      col
                    );
                    this.setState({ grid: newGrid });
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={false}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}
                      ></Node>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  startVisualization() {
    this.visualizeDFS();
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <Button
          size="small"
          disabled={this.state.disabled}
          onClick={() => this.startVisualization()}
          id="pathMainBtn"
        >
          Start Visualization
        </Button>
        <Button
          size="small"
          disabled={this.state.disabled}
          onClick={() => this.rM()}
          id="pathBtn"
        >
          Reset Board
        </Button>
        <Button
          size="small"
          disabled={this.state.disabled}
          onClick={() => this.createVerticalMaze()}
          id="pathBtn"
        >
          Create Vertical Maze
        </Button>
        <Button
          size="small"
          disabled={this.state.disabled}
          onClick={() => this.createHorizontalMaze()}
          id="pathBtn"
        >
          Create Horizontal Maze
        </Button>
        <Button
          size="small"
          disabled={this.state.disabled}
          onClick={() => this.createRandomMaze()}
          id="pathBtn"
        >
          Create Random Maze
        </Button>
        <hr></hr>
        <div className="grid" id="m">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} id="n">
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      color="white"
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        <hr></hr>
      </>
    );
  }
}
const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 21; row++) {
    const currentRow = [];
    for (let col = 0; col < 40; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
    direction: null,
    totaldistance: 0,
    weight: 0,
    heuristicValue:
      Math.abs(row - FINISH_NODE_ROW) + Math.abs(col - FINISH_NODE_COL),
  };
};
const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (
    row === START_NODE_ROW &&
    (col === START_NODE_COL || col === FINISH_NODE_COL)
  ) {
    return newGrid;
  }
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithWallToggledOn = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
const getNewGridWithWallToggledOff = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithStart = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isStart: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
const getNewGridWithEnd = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isFinish: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
