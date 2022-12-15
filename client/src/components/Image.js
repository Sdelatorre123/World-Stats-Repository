import React from 'react'
import { Card, } from 'react-bootstrap'

function Image() {
 return <React.Fragment>
    <Card>
        <Card.Img variant="top" 
        src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1109%2Fsoc_fans%2Dguide%2Dwc_16x9.jpg"/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          test
        </Card.Text>
    </Card>
 </React.Fragment>
}

export default Image