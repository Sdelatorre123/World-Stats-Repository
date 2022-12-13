import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return (
    <Card style={{ width: '90rem' }}>
      <Card.Header>Teams:</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Team 1</ListGroup.Item>
        <ListGroup.Item>Team 2</ListGroup.Item>
        <ListGroup.Item>Team 3</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Home;