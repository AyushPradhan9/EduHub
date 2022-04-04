import '../pathInfo.css';
import PathfindingVisualizer from './PathfindingVisualizer.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function BFSInfo() {
  return (
    <div className="Whole">
      <Container>
        <Col className="Info">
          <Row>
            <h1 className="topic">Breadth First Search</h1>
          </Row>
          <Row>
            <p className="det">
              Breadth first search is a graph traversal algorithm that starts traversing the graph from root node and explores all the neighbouring nodes. Then, it selects the nearest node and explore all the unexplored nodes. The algorithm follows the same process for each of the nearest node until it finds the goal.
              The algorithm of breadth first search is given below. The algorithm starts with examining the node A and all of its neighbours. In the next step, the neighbours of the nearest node of A are explored and process continues in the further steps. The algorithm explores all neighbours of all the nodes and ensures that each node is visited exactly once and no node is visited twice.
            </p>
          </Row>
        </Col>
        <Col>
          <div className="App" id="abc">
            <PathfindingVisualizer></PathfindingVisualizer>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default BFSInfo;
