import '../style.css';
import VisualizeCycle from './VisualizeCycle';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function CycleInfo() {
  return (
    <div className="Whole">
      <Toolbar />
      <div className="Info">
        <h1 className="topic">Cycle Sort</h1>
        <p className="det" id="cyl">
          Cycle sort is a comparison sorting algorithm that forces array to be factored into the number of cycles where each of them can be rotated to produce a sorted array.
          It is theoretically optimal in the sense that it reduces the number of writes to the original array.
          It is an in-place and unstable sorting algorithm. Cycle sort forces an array to be factored into a number of cycles where every element can rotate in order to produce a sorted array. The time complexity of cycle sort is O(n2), even in the best case.
        </p>
        <br />
        <p className="det"><b>Pseudocode:</b><br />
          Consider an array of n distinct elements.<br />
          An element a is given, index of a can be calculated by counting the number of elements that are smaller than a.
          <ol>
            <li>If the element is found to be at its correct position, simply leave it as it is.</li>
            <li>Otherwise, find the correct position of a by counting the total number of elements that are less than a. where it must be present in the sorted array. The other element b which is replaced is to be moved to its correct position.
              This process continues until we got an element at the original position of a.</li>
          </ol>
        </p>
        <br />
        <p className="det"><b>Algorithm:</b><br />
          <div className="codeBlock">
            <code className="codeText">CycleSort(array)<br />
              &emsp;output = 0<br />
              &emsp;for cycleStart from 0 to length(array) - 2<br />
              &emsp;&emsp;item = array[cycleStart]<br />
              &emsp;&emsp;pos = cycleStart<br />
              &emsp;&emsp;for i from cycleStart + 1 to length(array) - 1<br />
              &emsp;&emsp;&emsp;if array[i] &lt; item:<br />
              &emsp;&emsp;&emsp;&emsp;pos += 1<br />
              &emsp;&emsp;&emsp;if pos == cycleStart:<br />
              &emsp;&emsp;&emsp;&emsp;continue<br />
              &emsp;&emsp;while item == array[pos]:<br />
              &emsp;&emsp;&emsp;pos += 1<br />
              &emsp;&emsp;array[pos], item = item, array[pos]<br />
              &emsp;&emsp;writes += 1<br />
              &emsp;&emsp;while pos != cycleStart:<br />
              &emsp;&emsp;&emsp;pos = cycleStart<br />
              &emsp;&emsp;&emsp;for i from cycleStart + 1 to length(array) - 1<br />
              &emsp;&emsp;&emsp;&emsp;if array[i] &lt; item:<br />
              &emsp;&emsp;&emsp;&emsp;&emsp;pos += 1<br />
              &emsp;&emsp;&emsp;while item == array[pos]:<br />
              &emsp;&emsp;&emsp;&emsp;pos += 1<br />
              &emsp;&emsp;&emsp;array[pos], item = item, array[pos]<br />
              &emsp;&emsp;&emsp;writes += 1<br />
              &emsp;return outout<br />
            </code>
          </div>
        </p>
        <div className="App" id="abc">
          <VisualizeCycle></VisualizeCycle>
        </div>
      </div>
    </div>
  );
}

export default CycleInfo;
