import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Team() {
const checkout = async () => {
  await fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
  }).then((response) => {
    return response.json();
  }).then((response) => {
    if(response.url) {
      window.location.assign(response.url);
    }
  });
}

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
      <Card.Img variant="top" src="" />
      <Card.Body>
      <Card.Text>Subscribe today to join the community and get the most recent WorldCup updates!!  </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
    </Card>
  </React.Fragment> 
}

export default Team
