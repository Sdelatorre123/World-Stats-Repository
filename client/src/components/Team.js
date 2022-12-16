import React from 'react'
import { Card, ListGroup, Button} from 'react-bootstrap'

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
      <Button> Subscription Features </Button>
      <Card.Text>Subscribe today to get the newest exclusive features </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Get exclusive merch from your favorite teams and players! </ListGroup.Item>
        <ListGroup.Item>The ability to join chat rooms </ListGroup.Item>
        <ListGroup.Item>Individual player stats</ListGroup.Item>
      </ListGroup>
    </Card>
  </React.Fragment>
  
  
}

export default Team
