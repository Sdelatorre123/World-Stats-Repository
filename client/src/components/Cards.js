import React from 'react'
import { Card, Form, Table, Row} from 'react-bootstrap'
import flex from 'react'

export default function Cards() {
  return <React.Fragment>
    <Card>
        <Card.Img variant="top" src="https://media.cnn.com/api/v1/images/stellar/prod/221215080623-02-world-cup-2022-final-preview.jpg?c=original" />
        <h1> Argentina wins incredible WC final! </h1>
    </Card>
    <Table striped bordered hover variant="dark my-2">
      <thead>
        <tr>
          <th>Countries</th>
          <th>GP</th>
          <th>GF</th>
        </tr>
      </thead>
      <tbody>
        <tr>  
          <td>Argentina</td>
          <td>7</td>
          <td>15</td>
        </tr>
        <tr>
          <td>France</td>
          <td>7</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Croatia</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Morocco</td>
          <td>7</td>
          <td>6</td>
        </tr>
        <tr>
          <td>England</td>
          <td>5</td>
          <td>13</td>
        </tr>
        <tr>
          <td>Portugal</td>
          <td>5</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Netherlands</td>
          <td>5</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Brazil</td>
          <td>5</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Spain</td>
          <td>4</td>
          <td>9</td>
        </tr>
        <tr>
          <td>Japan</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Senegal</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>South Korea</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Switzerland</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Australia</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Poland</td>
          <td>5</td>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
    <Card className="my-2">
    <Card.Title style={{ display: flex }}>Subscribe</Card.Title>
    <p className="Subscription-title"> Subscribe to get the newest info about the World Cup!! </p>
    <Card.Text> Standard $10/monthly </Card.Text>
    <Card.Text> Premium $15/monthly </Card.Text>
    <Card.Text> Exclusive $20/monthly </Card.Text>
    <Row>
    <Form.Check type="checkbox" ClassName="my-2 text-center" label="Country flags apper next to your name" />
    <Form.Check type="checkbox" ClassName="my-2 text-center" label="Recieve exclusive merch from your favorite teams" />
    <Form.Check type="checkbox" ClassName="my-2 text-center" label="Post to the chat room and make some new friends" />
    <Form.Check type="checkbox" ClassName="my-2 text-center" label="Individual features and player stats" />
    </Row>
    </Card>
  </React.Fragment>
}
