import '../dataInfo.css';
import QueueVisualizer from './QueueVisualizer.jsx';
import { Container, Col, Row } from 'react-bootstrap';

function QueueInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Queue</h1>
          </Row>
          <Row>
            <p className="det">
              Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).
              Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.
              A real-world example of queue can be a single-lane one-way road, where the vehicle enters first, exits first. More real-world examples can be seen as queues at the ticket windows and bus-stops.
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <QueueVisualizer></QueueVisualizer>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default QueueInfo;
