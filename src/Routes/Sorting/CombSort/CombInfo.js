import '../sortInfo.css';
import VisualizeComb from './VisualizeComb.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function CombInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Comb Sort</h1>
          </Row>
          <Row>
            <p className="det">Comb Sort is mainly an improvement over Bubble Sort. Bubble sort always compares adjacent values. So all inversions are removed one by one. Comb Sort improves on Bubble Sort by using gap of size more than 1.
              The gap starts with a large value and shrinks by a factor of 1.3 in every iteration until it reaches the value 1. Thus Comb Sort removes more than one inversion counts with one swap and performs better than Bubble Sort.
              The shrink factor has been empirically found to be 1.3 (by testing Combsort on over 200,000 random lists).
              Although, it works better than Bubble Sort on average, worst case remains O(n2).
            </p>
          </Row>
          <Row>
            <p className="det"><b>Pseudocode:</b>
              <ol>
                <li>Create and initialise variables gap and swapped and constant SHRINK_FACTOR</li>
                <ol>
                  <li>gap = size of the array</li>
                  <li>swapped = false</li>
                  <li>SHRINK_FACTOR = 1.3</li>
                </ol>
                <li>Set swapped = false</li>
                <li>Set gap = gap/SHRINK_FACTOR</li>
                <li>Iterate over the array from i = 0 to i &lt; n - gap:</li>
                <li>if array[i] &gt; array[i + gap]</li>
                <ol>
                  <li>swap the elements array[i] and array[i + gap]</li>
                  <li>set swapped = true</li>
                </ol>
                <li>Repeat steps 2-4 while gap != 1 and swapped = true</li>
              </ol>
            </p>
          </Row>
          <Row>
            <p className="det"><b>Algorithm:</b><br />
              <div className="codeBlock">
                <code className="codeText">CombSort(array, size)<br />
                  &emsp;gap = size<br />
                  &emsp;flag = true<br />
                  &emsp;while(gap != 1 || flag == true)<br />
                  &emsp;&emsp;gap = (gap*10)/13<br />
                  &emsp;&emsp;if(gap&lt;1)<br />
                  &emsp;&emsp;&emsp;gap = 1<br />
                  &emsp;&emsp;flag = false<br />
                  &emsp;for(i = 0; i&lt;size-gap; i++)<br />
                  &emsp;&emsp;if(array[i] &gt; array[i+gap])<br />
                  &emsp;&emsp;&emsp;swap(array[i], array[i+gap])<br />
                  &emsp;&emsp;&emsp;flag = true<br />
                </code>
              </div>
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <VisualizeComb></VisualizeComb>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default CombInfo;
