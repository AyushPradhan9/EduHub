import '../dataInfo.css';
import DLLVisualizer from './DLLVisualizer.jsx';
import { Container, Col, Row } from 'react-bootstrap';

function DLLInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Doubly Linked List</h1>
          </Row>
          <Row>
            <p className="det">
              Doubly linked list can be defined as the collection of ordered set of elements. The number of elements may vary according to need of the program. A node in the singly linked list consist of two parts: data part and link part. Data part of the node stores actual information that is to be represented by the node while the link part of the node stores the address of its immediate successor.
              Two way chain or doubly linked list can be traversed only in two direction. In other words, we can say that each node contains only next pointer, therefore we can not traverse the list in the reverse direction.
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <DLLVisualizer></DLLVisualizer>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default DLLInfo;
