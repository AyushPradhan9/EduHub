import './AStarInfo.css';
import PathfindingVisualizer from './PathfindingVisualizer.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function AStarInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">A* Search</h1>
        <p className="det">
        A* algorithm works based on heuristic methods and this helps achieve optimality. A* is a different form of the best-first algorithm. Optimality empowers an algorithm to find the best possible solution to a problem. Such algorithms also offer completeness, if there is any solution possible to an existing problem, the algorithm will definitely find it.  
        When A* enters into a problem, firstly it calculates the cost to travel to the neighbouring nodes and chooses the node with the lowest cost.
        The heuristic value has an important role in the efficiency of the A* algorithm. To find the best solution, you might have to use different heuristic function 
        according to the type of the problem. However, the creation of these functions is a difficult task, and this is the basic problem we face in AI. 
        </p></div>
      <div className="App" id="abc">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default AStarInfo;
