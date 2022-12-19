const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/Auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// stripe
// Standard Subscription: price_1MG3g0LpXyZJqOSzIy4xGHUi
// Premium Subscription: price_1MG3hpLpXyZJqOSzhcHjyFhj
// Exclusive Subscription: price_1MG3jeLpXyZJqOSzv5niurtQ
//const express = require('express');
var cors = require('cors');
//const stripe = require('stripe')('sk_test_51MFS1VLpXyZJqOSza2VsE6jy7VR6mRwrHfVzwi5nVBB6u484CmoB0Tikne7zZYB2BcNaePLphvCeOM2fNqHeagMS00rJQcnai7');
const stripe = require('stripe')('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');

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body)
  const items = req.body.itmes;
  let lineItems = [];
  items.forEach((item)=> {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  });

  //const session = await stripe.checkout.sessions.create({
    //line_itmes: lineItems,
    //mode: 'payment',
    //success_url: "http://localhost:3000/success",
    //cancel_url: "http://localhost:3000/cancel"
  //});

  //res.send(JSON.stringify({
    //url: sessopm.url
  //}));
});
//app.listen(3000, () => console.log("Listening on port 3000"))

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);