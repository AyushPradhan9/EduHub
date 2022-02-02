import '../style.css';
import VisualizeMerge from './VisualizeMerge.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function MergeInfo() {
  return (
    <div className="Whole">
      <Toolbar />
      <div className="Info">
        <h1 className="topic">Merge Sort</h1>
        <p className="det">
          Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
          Merge sort first divides the array into equal halves and then combines them in a sorted manner.
        </p>
        <br />
        <p className="det"><b>Pseudocode:</b>
          <ol>
            <li>For an array of length ‘N’, split it into two halves(left and right subarrays) as evenly as possible.</li>
            <li>Now, let’s take the left subarray and repeat the step 1 till we have sub arrays of length 1.</li>
            <li>Start to merge the elements of the subarrays in the order they were split with the smallest digit placed at the start.</li>
            <li>Repeat step 3 till the whole left array is sorted and merged.</li>
            <li>Repeat steps 2, 3 and 4 for the right subarray.</li>
            <li>Now take the two sorted subarrays and pick the first elements or both the subarrays, compare them and place the smallest one at the start.</li>
            <li>Repeat step 6 for the proceeding elements.</li>
          </ol>
        </p>
        <br />
        <p className="det"><b>Algorithm:</b><br />
          <div className="codeBlock">
            <code className="codeText">Merge(LA, RA, A)<br />
              &emsp;nL = Length of LeftArray (LA)<br />
              &emsp;nR = Length of RightArray (RA)<br />
              &emsp;i = j = k = 0<br />
              &emsp;while(i&lt;nL and j&lt;nR)<br />
              &emsp;&emsp;if(LA[i] &lt;= RA[j])<br />
              &emsp;&emsp;&emsp;A[k] = LA[i]<br />
              &emsp;&emsp;&emsp;i = i+1<br />
              &emsp;&emsp;else<br />
              &emsp;&emsp;&emsp;A[k] = RA[j]<br />
              &emsp;&emsp;&emsp;j = j+1<br />
              &emsp;&emsp;k = k+1<br />
              &emsp;while(i&lt;nL)<br />
              &emsp;&emsp;A[k] = LA[i]<br />
              &emsp;&emsp;i = i+1<br />
              &emsp;&emsp;k = k+1<br />
              &emsp;while(j&lt;nR)<br />
              &emsp;&emsp;A[k] = RA[j]<br />
              &emsp;&emsp;j = j+1<br />
              &emsp;&emsp;k = k+1<br />
              <br />
              MergeSort(A)<br />
              &emsp;n = length of Array (A)<br />
              &emsp;if(n&lt;2)<br />
              &emsp;&emsp;return<br />
              &emsp;mid = n/2<br />
              &emsp;left = array of size(mid)<br />
              &emsp;right = array of size(n-mid)<br />
              &emsp;for i = 0 to mid-1<br />
              &emsp;&emsp;left[i] = A[i]<br />
              &emsp;for i = mid to n-1<br />
              &emsp;&emsp;right[i-mid] = A[i]<br />
              &emsp;MergeSort(left)<br />
              &emsp;MergeSort(right)<br />
              &emsp;Merge(left, right, A)<br />
            </code>
          </div>
        </p>
        <div className="App" id="abc">
          <VisualizeMerge></VisualizeMerge>
        </div>
      </div>
    </div>
  );
}

export default MergeInfo;
