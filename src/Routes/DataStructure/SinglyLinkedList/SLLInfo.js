import './SLLInfo.css';
import SLLVisualizer from './SLLVisualizer.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function SLLInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Singly Linked List</h1>
        <p className="det">
        Singly linked list can be defined as the collection of ordered set of elements. The number of elements may vary according to need of the program. A node in the singly linked list consist of two parts: data part and link part. Data part of the node stores actual information that is to be represented by the node while the link part of the node stores the address of its immediate successor.

One way chain or singly linked list can be traversed only in one direction. In other words, we can say that each node contains only next pointer, therefore we can not traverse the list in the reverse direction.
          </p>
        </div>
      <div className="App" id="abc">
        <SLLVisualizer></SLLVisualizer>
      </div>
    </div>
  );
}

export default SLLInfo;
