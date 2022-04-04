import '../dataInfo.css';
import ArrayVisualizer from './ArrayVisualizer.jsx';
import { Col, Row, Container } from 'react-bootstrap';

function ArrayInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Array</h1>
          </Row>
          <Row>
            <p className="det">Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.
              Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them.
              In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
              Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection.
              The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <ArrayVisualizer></ArrayVisualizer>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default ArrayInfo;
