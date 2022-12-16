import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Image() {
 return <React.Fragment>
    <Card className='my-2'>
        <Card.Img variant="top" 
        src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1109%2Fsoc_fans%2Dguide%2Dwc_16x9.jpg"/>
        <a href="https://www.sfgate.com/sports/article/World-Cup-history-beckons-for-France-Mbappe-17656324.php">
          <Button className='my-2 width: 18rem'>Article</Button>
        </a>
        <Card.Text className='my-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          test
        </Card.Text>
    </Card>
    <Card>
        <Card.Img variant="top" 
        src="https://s.hdnux.com/photos/01/30/62/43/23275765/3/ratio3x2_1300.jpg"/>
        <a href="https://www.sfgate.com/sports/article/World-Cup-history-beckons-for-France-Mbappe-17656324.php">
          <Button className='my-2 width: 18rem'>Article</Button>
        </a>
        <Card.Text>
        World Cup history beckons for France, Mbappé, Deschamps 
        </Card.Text>
    </Card>
    <Card className='my-2'>
        <Card.Img variant="top" 
        src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1109%2Fsoc_fans%2Dguide%2Dwc_16x9.jpg"/>
        <a href="https://www.sfgate.com/sports/article/World-Cup-history-beckons-for-France-Mbappe-17656324.php">
          <Button className='my-2 width: 18rem'>Article</Button>
        </a>
        <Card.Text className='my-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    </Card>
  
 </React.Fragment>
}

export default Image