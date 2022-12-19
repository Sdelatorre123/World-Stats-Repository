import React from 'react'
import { Card, Table} from 'react-bootstrap'

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
<div className="checkout">
  <h1>Subscribe</h1>
  <p className="checkout-title"> Subscribe to get the newest info about the World Cup!! </p>
  <h1 className="checkout-price">$10</h1>
  <button
    className="checkout-button"/>
</div>

  </React.Fragment>
}
