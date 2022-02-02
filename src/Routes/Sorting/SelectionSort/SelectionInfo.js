import '../style.css';
import VisualizeSelection from './VisualizeSelection.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function SelectionInfo() {
  return (
    <div className="Whole">
      <Toolbar />
      <div className="Info">
        <h1 className="topic">Selection Sort</h1>
        <p className="det">
          Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.
          The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.
          This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.
        </p>
        <br />
        <p className="det"><b>Pseudocode:</b>
          <ol>
            <li>Set min  index to the first index of an unsorted array</li>
            <li>Iterate the entire unsorted array and do the comparison with min</li>
            <li>If element present at the min is greater than the element present at the current index then update min with a current index</li>
            <li>Once the iteration is complete, swap the element of min index with the first element of the unsorted part</li>
            <li>For descending order, instead of maintaining the smallest element index, maintain the largest element index</li>
          </ol>
        </p>
        <br />
        <p className="det"><b>Algorithm:</b><br />
          <div className="codeBlock">
            <code className="codeText">SelectionSort (Array, n)<br />
              &emsp;for i = 0 to n-2<br />
              &emsp;&emsp;i_min = i<br />
              &emsp;&emsp;for j = i+1 to n-1<br />
              &emsp;&emsp;if Array[j] &lt; Array[i_min]<br />
              &emsp;&emsp;&emsp;i_min = j<br />
              &emsp;&emsp;Swap(Array[j], Array[i_min])<br />
            </code>
          </div>
        </p>
        <div className="App" id="abc">
          <VisualizeSelection></VisualizeSelection>
        </div>
      </div>
    </div>
  );
}

export default SelectionInfo;
