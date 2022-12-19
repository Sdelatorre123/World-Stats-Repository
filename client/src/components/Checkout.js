/* import 'bootstrap/dist/css/bootstrap.min.css';
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react";

import CardIcon from "../img/credit-card.svg";
import ProductImage from "../img/product-image.jpg";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MG3g0LpXyZJqOSzIy4xGHUi",
    quantity: 1
  }


const checkoutOptions = {
  lineItems: {item},
  mode: "payment",
  successUrl: `${window.location.origin}/success`,
  camcelUrl: `${window.location.origin}/cancel`
}

const redirectToCheckout = async () => {
  setLoading(true);
  console.log("redirectToCheckout")
  
  const stripe = await getStripe()
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log("Stripe checkout error", error);

  if (error) setStripeError(error.message);
  setLoading(false);
};

if (stripeError) alert(stripeError);

return ( */
  {/* <div className="checkout">
  <h1>Subscribe</h1>
  <p className="checkout-title"> Subscribe to get the newest info about the World Cup!! </p>
  <h1 className="checkout-price">$10</h1>
  <img
    className="checkout-product-image"
    src={ProductImage}
    alt="Product"
  />
  <button
    className="checkout-button"
    onClick={redirectToCheckout}
    disabled={isLoading}
  >
    <div className="grey-circle">
      <div className="purple-circle">
        <img className="icon" src={CardIcon} alt="credit-card-icon" />
      </div>
    </div>
    <div className="text-container">
      <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
    </div>
  </button>
</div> */}
/* );
};
export default Checkout; */
/* const checkout = async () => {
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
} */

 /*  return <React.Fragment>
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
      <Button className ></Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
    </Card>
  </React.Fragment> 
} */


