import '../sortInfo.css';
import VisualizeShell from './VisualizeShell.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function ShellInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Shell Sort</h1>
          </Row>
          <Row>
            <p className="det">
              ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved.
              The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>Initialize the gap size i.e. h</li>
                <li>Divide the array into sub-arrays each having interval of h</li>
                <li>Sort the sub-arrays with insertion sort</li>
                <li>Reduce the value of h</li>
                <li>Repeat the above steps until the array is sorted</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">ShellSort(arr, n)<br />
                  &emsp;for (gap = n/2; gap &gt; 0; gap /= 2)<br />
                  &emsp;&emsp;for (i = gap; i &lt; n; i += 1)<br />
                  &emsp;&emsp;&emsp;temp = arr[i];   <br />
                  &emsp;&emsp;&emsp;for (j = i; j &gt;= gap &#38;&#38; arr[j - gap] &gt; temp; j -= gap)<br />
                  &emsp;&emsp;&emsp;&emsp;arr[j] = arr[j - gap];<br />
                  &emsp;&emsp;arr[j] = temp;<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeShell></VisualizeShell>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default ShellInfo;
