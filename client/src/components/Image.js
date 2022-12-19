import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Image() {
 return <React.Fragment>
   <Card className='my-2 text-center'>
        <Card.Img variant="top" 
        src="https://assets.khelnow.com/news/uploads/2022/11/Uruguay-vs-South-Korea.jpg"/>
        <a href="https://www.nytimes.com/2022/12/02/sports/soccer/ghana-uruguay-world-cup.html">
          <Button className="my-2 width: 18rem ">Article</Button>
        </a>
        <Card.Text className='my-2'>
        How South Korea knocked out Uruguay from the World Cup.
        </Card.Text>
    </Card>
    <Card className='my-2 text-center'>
        <Card.Img variant="top" 
        src="https://media.npr.org/assets/img/2022/12/18/gettyimages-1450118530_custom-9927085567243b1ccc04ac0275277e27fc669437-s1200-c85.webp"/>
        <a href="https://www.npr.org/2022/12/19/1143835164/2022-world-cup-qatar">
          <Button className="my-2 width: 18rem ">Article</Button>
        </a>
        <Card.Text className='my-2'>
        The moments that captured our attention at the 2022 World Cup in Qatar
        </Card.Text>
    </Card>
    <Card className="my-2 text-center">
        <Card.Img variant="top" 
        src="https://s.hdnux.com/photos/01/30/62/43/23275765/3/ratio3x2_1300.jpg"/>
        <a href="https://www.sfgate.com/sports/article/World-Cup-history-beckons-for-France-Mbappe-17656324.php">
          <Button className='my-2 width: 18rem'>Article</Button>
        </a>
        <Card.Text>
        World Cup history beckons for France, Mbappé, Deschamps 
        </Card.Text>
    </Card>
    <Card className='my-2 text-center'>
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