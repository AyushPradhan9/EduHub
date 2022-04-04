import '../dataInfo.css';
import USVisualizer from './USVisualizer.jsx';
import { Container, Col, Row } from 'react-bootstrap';

function USInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Unsorted Set</h1>
          </Row>
          <Row>
            <p className="det">
              A set is used to provide a particular ordering on its element. The elements are ordered either by using a natural ordering or by using a Comparator.
              All the elements which are inserted into a sorted set must implement the Comparable interface.
              The set's iterator will traverse the set in an ascending order. Several other operations are provided in order to make best use of ordering.
              All the elements must be mutually comparable.
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <USVisualizer></USVisualizer>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default USInfo;
