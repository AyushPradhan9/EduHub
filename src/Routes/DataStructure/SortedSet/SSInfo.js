import './SSInfo.css';
import SSVisualizer from './SSVisualizer.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function SSInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Sorted Set</h1>
        <p className="det">
        A set is used to provide a particular ordering on its element. The elements are ordered either by using a natural ordering or by using a Comparator. All the elements which are inserted into a sorted set must implement the Comparable interface.

The set's iterator will traverse the set in an ascending order. Several other operations are provided in order to make best use of ordering. All the elements must be mutually comparable.</p></div>
      <div className="App" id="abc">
        <SSVisualizer></SSVisualizer>
      </div>
    </div>
  );
}

export default SSInfo;
