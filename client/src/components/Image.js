import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Image() {
 return <React.Fragment>
    <Card className='my-2'>
        <Card.Img variant="top" 
        src="https://media.npr.org/assets/img/2022/12/15/gettyimages-1245634594_custom-c3f81c692f42cab13add64fb919a5c820989ae94-s900-c85.webp"/>
        <a href="https://www.npr.org/2022/12/16/1143083797/world-cup-final-france-argentina-qatar">
          <Button className='my-2 width: 18rem'>Article</Button>
        </a>
        <Card.Text className='my-2'>
        France takes on Argentina in the World Cup Final. Here's what you need to know!
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
        src="https://static01.nyt.com/images/2022/12/13/multimedia/13themorning-lead-1-30e8/13themorning-lead-1-30e8-jumbo.jpg?quality=75&auto=webp"/>
        <a href="https://www.nytimes.com/2022/12/13/briefing/morocco-world-cup.html?auth=login-google1tap&login=google1tap">
          <Button className="my-2 width: 18rem ">Article</Button>
        </a>
        <Card.Text className='my-2'>
          The Power of History: Morocco could end European and South American dominance over the World Cup.
        </Card.Text>
    </Card>
  
 </React.Fragment>
}

export default Image