import '../sortInfo.css';
import VisualizeQuick from './VisualizeQuick.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function QuickInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Quick Sort</h1>
          </Row>
          <Row>
            <p className="det">
              Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm.
              This algorithm follows the divide and conquer approach. Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>We are given with an input array</li>
                <li>Choose pivot, here we are choosing the last element as our pivot</li>
                <li>Now partition the array as per pivot</li>
                <ol>
                  <li>Keep a partitioned index say p and initialize it to -1</li>
                  <li>Iterate through every element in the array except the pivot</li>
                  <li>If an element is less than the pivot element then increment p and swap the elements at index p with the element at index i.</li>
                  <li>Once all the elements are traversed, swap pivot with element present at p+1 as this will the same position as in the sorted array</li>
                  <li>Now return the pivot index</li>
                </ol>
                <li>Once partitioned, now make 2 calls on quicksort</li>
                <ol>
                  <li>One from beg to p-1</li>
                  <li>Other from p+1 to n-1</li>
                </ol>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">QuickSort(arr, beg, end)<br />
                  &emsp;if (beg &lt; end)<br />
                  &emsp;&emsp;pivotIndex = partition(arr,beg, end)<br />
                  &emsp;&emsp;quickSort(arr, beg, pivotIndex)<br />
                  &emsp;&emsp;quickSort(arr, pivotIndex + 1, end)<br />
                  <br />
                  &emsp;partition(arr, beg, end)<br />
                  &emsp;&emsp;set end as pivotIndex<br />
                  &emsp;&emsp;pIndex = beg - 1<br />
                  &emsp;&emsp;for i = beg to end-1<br />
                  &emsp;&emsp;if arr[i] &lt; pivot<br />
                  &emsp;&emsp;&emsp;swap arr[i] and arr[pIndex]<br />
                  &emsp;&emsp;&emsp;pIndex++<br />
                  &emsp;&emsp;swap pivot and arr[pIndex+1]<br />
                  &emsp;return pIndex + 1<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeQuick></VisualizeQuick>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default QuickInfo;
