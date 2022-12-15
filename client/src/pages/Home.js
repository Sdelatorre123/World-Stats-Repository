import { Card, Container, Col, Row } from 'react-bootstrap';
import Team from '../components/Team';
import Image from '../components/Image';

function Home() {
  return (
    <Container className="my-4">
    <Card className="shadow-lg p-4">
      <form>
        <Row>
          <Col md={8}> 
          <Team></Team>
            </Col>
          <Col md={4}>
          <Image></Image>
            </Col>
        </Row>
      </form>
    </Card>
    </Container>
  );
}

export default Home;
