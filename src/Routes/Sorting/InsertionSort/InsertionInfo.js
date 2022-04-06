import '../sortInfo.css';
import VisualizeInsertion from './VisualizeInsertion.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function InsertionInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Insertion Sort</h1>
          </Row>
          <Row>
            <p className="det">
              Insertion is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted.
              For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there.
              Hence the name, insertion sort. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array).
              This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>Take the first element and consider it to be a sorted part(a single element is always sorted)</li>
                <li>Now pick arr[1] and store it is a temporary variable</li>
                <li>Start comparing the values of tmp with elements of the sorted part from the rear side</li>
                <li>If tmp is less than the rear element, say arr[k], then shift arr[k] to k+1 index</li>
                <li>This shifting will continue until the appropriate location is identified. Then, we will put the temporary element at the identified location</li>
                <li>This will continue for all the elements, and we will have our desired sorted array in ascending order</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">InsertionSort(Array, n)<br />
                  &emsp;for i = 1 to n-1<br />
                  &emsp;&emsp;value = Array[i]<br />
                  &emsp;&emsp;position = i<br />
                  &emsp;&emsp;while (position &gt; 0 and Array[position-1] &gt; value)<br />
                  &emsp;&emsp;&emsp;Array[position] = Array[position - 1]<br />
                  &emsp;&emsp;&emsp;position = position - 1<br />
                  &emsp;&emsp;Array[position] = value;<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeInsertion></VisualizeInsertion>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default InsertionInfo;
