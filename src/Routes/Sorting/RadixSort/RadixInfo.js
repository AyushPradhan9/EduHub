import '../sortInfo.css';
import VisualizeRadix from './VisualizeRadix.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function RadixInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Radix Sort</h1>
          </Row>
          <Row>
            <p className="det">Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.
              Suppose, we have an array of 8 elements. First, we will sort elements based on the value of the unit place. Then, we will sort elements based on the value of the tenth place. This process goes on until the last significant place.
              Since radix sort is a non-comparative algorithm, it has advantages over comparative sorting algorithms.
              For the radix sort that uses counting sort as an intermediate stable sort, the time complexity is O(d(n+k)).
              Here, d is the number cycle and O(n+k) is the time complexity of counting sort.
              Thus, radix sort has linear time complexity which is better than O(nlog n) of comparative sorting algorithms.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>First, we have to find the largest element (suppose max) from the given array. Suppose 'x' be the number of digits in max. The 'x' is calculated because we need to go through the significant places of all elements.</li>
                <li>After that, go through one by one each significant place. Here, we have to use any stable sorting algorithm to sort the digits of each significant place.</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">getMax(arr, n)  <br />
                  &emsp;max = arr[0]  <br />
                  &emsp;for(int i = 1; i&lt;n; i++)<br />
                  &emsp;&emsp;if(a[i] &gt; max)  <br />
                  &emsp;&emsp;&emsp;max = a[i]  <br />
                  &emsp;return max  <br />
                  <br />
                  RadixSort(arr, n) <br />
                  &emsp;max = getMax(arr, n)<br />
                  &emsp;for (int place = 1; max / place &gt; 0; place *= 10)  <br />
                  &emsp;&emsp;CountingSort(arr, n, place)   <br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeRadix></VisualizeRadix>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default RadixInfo;
