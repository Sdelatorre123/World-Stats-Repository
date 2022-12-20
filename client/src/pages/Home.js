import { Card, Container, Col, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
/* import Checkout from '../components/Checkout'; */
import Image from '../components/Image';

function Home() {
  return (
    <Container className="my-4">
    <Card className="shadow-lg p-4">
      <form>
        <Row>
          <Col md={8}> 
          <Cards></Cards>
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
