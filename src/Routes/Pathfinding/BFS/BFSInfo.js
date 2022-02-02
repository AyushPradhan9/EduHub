import './BFSInfo.css';
import PathfindingVisualizer from './PathfindingVisualizer.jsx';
import {  Toolbar } from "@material-ui/core";

function BFSInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Breadth First Search</h1>
        <p className="det">
        Breadth first search is a graph traversal algorithm that starts traversing the graph from root node and explores all the neighbouring nodes. Then, it selects the nearest node and explore all the unexplored nodes. The algorithm follows the same process for each of the nearest node until it finds the goal.
        The algorithm of breadth first search is given below. The algorithm starts with examining the node A and all of its neighbours. In the next step, the neighbours of the nearest node of A are explored and process continues in the further steps. The algorithm explores all neighbours of all the nodes and ensures that each node is visited exactly once and no node is visited twice.
        </p>
        </div>
      <div className="App"  id="abc">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default BFSInfo;
