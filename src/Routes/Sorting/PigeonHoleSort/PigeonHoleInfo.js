import '../sortInfo.css';
import VisualizePigeonHole from './VisualizePigeonHole.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function PigeonHoleInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">PigeonHole Sort</h1>
          </Row>
          <Row>
            <p className="det">
              Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements and the number of possible key values are approximately the same.
              It requires O(n + Range) time where n is number of elements in input array and ‘Range’ is number of possible values in array.
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>Find minimum and maximum values in array. Let the minimum and maximum values be ‘min’ and ‘max’ respectively. Also find range as ‘max-min+1’.</li>
                <li>Set up an array of initially empty “pigeonholes” the same size as of the range.</li>
                <li>Visit each element of the array and then put each element in its pigeonhole. An element arr[i] is put in hole at index arr[i] – min.</li>
                <li>Start the loop all over the pigeonhole array in order and put the elements from non- empty holes back into the original array.</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">PigeonholeSort(a):<br />
                  &emsp;minimum = min(a)<br />
                  &emsp;maximum = max(a)<br />
                  &emsp;size = maximum - minimum + 1<br />
                  &emsp;pigeonholes = [0] * size<br />
                  &emsp;for i in a:<br />
                  &emsp;&emsp;pigeonholes[i - minimum] += 1<br />
                  &emsp;j = 0<br />
                  &emsp;for count in range(size):<br />
                  &emsp;&emsp;while pigeonholes[count] &gt; 0:<br />
                  &emsp;&emsp;&emsp;pigeonholes[count] -= 1<br />
                  &emsp;&emsp;&emsp;a[j] = count + minimum<br />
                  &emsp;&emsp;&emsp;j += 1<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizePigeonHole></VisualizePigeonHole>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default PigeonHoleInfo;
