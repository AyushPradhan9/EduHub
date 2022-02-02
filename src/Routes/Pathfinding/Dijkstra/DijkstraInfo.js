import './DijkstraInfo.css';
import PathfindingVisualizer from './PathfindingVisualizer.jsx';
import { Toolbar } from "@material-ui/core";

function DijkstraInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Dijkstra Search</h1>
        <p className="det">
        Dijkstra Algorithm is a greedy algorithm that solves the single-source shortest path problem for a directed graph G = (V, E) with nonnegative edge weights, i.e., w (u, v) ≥ 0 for each edge (u, v) ∈ E.

Dijkstra's Algorithm maintains a set S of vertices whose final shortest - path weights from the source s have already been determined. That's for all vertices v ∈ S; we have d [v] = δ (s, v). The algorithm repeatedly selects the vertex u ∈ V - S with the minimum shortest - path estimate, insert u into S and relaxes all edges leaving u.

Because it always chooses the "lightest" or "closest" vertex in V - S to insert into set S, it is called as the greedy strategy.
        </p>
        </div>
      <div className="App"  id="abc">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default DijkstraInfo;
