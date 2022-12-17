import React from 'react'
import { Card, ListGroup, Button, Row, Col, Container, Form, } from 'react-bootstrap'

function Team() {
  return <React.Fragment>
     <Card>
      <Card.Body>
      <ListGroup>
      <ListGroup.Item>Portugal</ListGroup.Item>
      <ListGroup.Item>Morocco</ListGroup.Item>
      <ListGroup.Item>Argentina</ListGroup.Item>
      <ListGroup.Item>Your mom</ListGroup.Item>
      <ListGroup.Item>Etc..</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      </Card>
      <Card className='my-2 width: 18rem text-center'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/f2/7a/79/f27a79933bdac5ac3a3307a5f044e8c9.jpg" />
      <Card.Body>
      <Card.Text>Subscribe today to join the community and get the most recent WorldCup updates!!  </Card.Text>
      </Card.Body>
      <Container>
      <Row>
        <Col xs>
        <a href="/Subscription.js">
          <Button variant="danger" type="submit"> Standard $10/month </Button>
        </a>
          <Form.Check type="radio" id={`default-`} label={`Individual player stats`} />
          </Col>
        <Col xs={{ order: 12 }}>
        <a href="/Subscription.js">
          <Button variant="danger" type="submit"> Premium $15/month</Button>
        </a>
          <Form.Check type="radio" id={`default-`} label={`The ability to join chat rooms`} />
          </Col>
        <Col xs={{ order: 1 }}>
        <a href="/Subscription.js">
          <Button variant="danger" type="submit"> Exclusive $20/month</Button>
        </a>
          <Form.Check type="radio" id={`default-`} label={`Get exclusive merch from your favorite teams and players`} />
        </Col>
      </Row>
    </Container>
      <ListGroup className="list-group-flush">
      </ListGroup>
    </Card>
  </React.Fragment> 
}

export default Team
