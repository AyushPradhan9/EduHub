import '../sortInfo.css';
import VisualizeHeap from './VisualizeHeap.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function HeapInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Heap Sort</h1>
          </Row>
          <Row>
            <p className="det">
              Heap sort can be understood as the improved version of the binary search tree. It does not create a node as in case of binary search tree instead it builds the heap by adjusting the position of elements within the array itself.
              In which method a tree structure called heap is used where a heap is a type of binary tree. An ordered balanced binary tree is called a Min-heap, where the value at the root of any subtree is less than or equal to the value of either of its children.
              An ordered balanced binary tree is called a max heap where the value at the root of any subtree is more than or equal to the value of either of its children.
              It is not necessary that the two children must be in some order. sometimes the value in the left child may be more than the value at the right child and some other time it may be the other way round.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>First, call build max heap to set the heap initially</li>
                <li>Once the heap is created, take the root and wap it will the last element of the heap</li>
                <li>Reduce the size of the heap</li>
                <li>Call max heapify of index 0 i.e, the new root of the heap</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">HeapSort(arr)<br />
                  &emsp;buildMaxHeap(arr)<br />
                  &emsp;for (int i = n - 1; i &gt;= 0; i--)<br />
                  &emsp;&emsp;swap(&amp; arr[0], &amp; arr[i]);<br />
                  &emsp;&emsp;heapsize--;<br />
                  &emsp;&emsp;maxHeapify(arr,0);<br />
                  <br />
                  buildMaxHeap(arr)<br />
                  &emsp;heap_size(arr) = length(arr)<br />
                  &emsp;for i = length(arr)/2 to 1<br />
                  &emsp;&emsp;MaxHeapify(arr,i)<br />
                  <br />
                  maxHeapify(arr,i)<br />
                  &emsp;L = left(i)<br />
                  &emsp;R = right(i)<br />
                  &emsp;if L ? heap_size[arr] and arr[L] &gt; arr[i]<br />
                  &emsp;&emsp;largest = L<br />
                  &emsp;else<br />
                  &emsp;&emsp;largest = i<br />
                  &emsp;if R ? heap_size[arr] and arr[R] &gt; arr[largest]<br />
                  &emsp;&emsp;largest = R<br />
                  &emsp;if largest != i<br />
                  &emsp;&emsp;swap arr[i] with arr[largest]<br />
                  &emsp;MaxHeapify(arr,largest)<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeHeap></VisualizeHeap>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default HeapInfo;
