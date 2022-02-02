import '../style.css';
import VisualizeBubble from './VisualizeBubble.jsx';
import { Toolbar } from "@material-ui/core";

function BubbleInfo() {
  return (
    <div className="Whole">
      <Toolbar />
      <div className="Info">
        <h1 className="topic">Bubble Sort</h1>
        <p className="det">Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.
          This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.
        </p>
        <br />
        <p className="det"><b>Pseudocode:</b>
          <ol>
            <li>We are given with an input array which is supposed to be sorted in ascending order</li>
            <li>We start with the first element and i=0 index and check if the element present at i+1 is greater then we swap the elements at index i and i+1.</li>
            <li>If above is not the case, then no swapping will take place.</li>
            <li>Now  “ i ” gets incremented and the above 2 steps happen again until the array is exhausted.</li>
            <li>We will ignore the last index as it is already sorted.</li>
            <li>Now the largest element will be at the last index of the array.</li>
            <li>Now we will again set i=0 and continue with the same steps that will eventually place second largest at second last place in the array. Now the last 2 indexes of the array are sorted.</li>
          </ol>
        </p>
        <br />
        <p className="det"><b>Algorithm:</b><br />
          <div className="codeBlock">
            <code className="codeText">BubbleSort(arr, size)<br />
              &emsp;for i=0 to n-i-1<br />
              &emsp;&emsp;for j=0 to n-i-2<br />
              &emsp;&emsp;&emsp;if arr[j]&gt;arr[j+1]<br />
              &emsp;&emsp;&emsp;&emsp;Swap arr[j] and arr[j+1]<br />
            </code>
          </div>
        </p>
        <div className="App">
          <VisualizeBubble></VisualizeBubble>
        </div>
      </div>
    </div>
  );
}

export default BubbleInfo;
