import '../style.css';
import VisualizeGnome from './VisualizeGnome.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function GnomeInfo() {
  return (
    <div className="Whole">
      <Toolbar />
      <div className="Info">
        <h1 className="topic">Gnome Sort</h1>
        <p className="det">
          The gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort. It is conceptually simple, requiring no nested loops. The average running time is O(n2) but tends towards O(n) if the list is initially almost sorted.
          The algorithm finds the first place where two adjacent elements are in the wrong order and swaps them. It takes advantage of the fact that performing a swap can introduce a new out-of-order adjacent pair next to the previously swapped elements. It does not assume that elements forward of the current position are sorted, so it only needs to check the position directly previous to the swapped elements.
        </p>
        <br />
        <p className="det"><b>Pseudocode:</b>
          <ol>
            <li>If you are at the start of the array then go to the right element (from arr[0] to arr[1]).</li>
            <li>If the current array element is larger or equal to the previous array element then go one step right</li>
            <li>If the current array element is smaller than the previous array element then swap these two elements and go one step backwards</li>
            <li>Repeat steps 2) and 3) till ‘i’ reaches the end of the array (i.e- ‘n-1’)</li>
            <li>If the end of the array is reached then stop and the array is sorted.</li>
          </ol>
        </p>
        <br />
        <p className="det"><b>Algorithm:</b><br />
          <div className="codeBlock">
            <code className="codeText">GnomeSort(arr, n)<br />
              &emsp;index = 0<br />
              &emsp;while (index &lt; n)<br />
              &emsp;&emsp;if (index == 0)<br />
              &emsp;&emsp;&emsp; index++<br />
              &emsp;&emsp;if (arr[index] &gt;= arr[index - 1])<br />
              &emsp;&emsp;&emsp;index++<br />
              &emsp;&emsp;else<br />
              &emsp;&emsp;&emsp;swap(arr[index], arr[index - 1])<br />
              &emsp;&emsp;&emsp;index--<br />
            </code>
          </div>
        </p>
        <div className="App" id="abc">
          <VisualizeGnome></VisualizeGnome>
        </div>
      </div>
    </div>
  );
}

export default GnomeInfo;
