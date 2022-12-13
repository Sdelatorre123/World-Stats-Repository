const db = require('../config/connection');
const { User } = require('../models/user');


db.once('open', async () => {
    await User.deleteMany({});


    const userData = [];
  for (let i = 1; i < 51; i++) {
    const username = `user${i}`;
    const email = `${username}@gmail.com`;
    const password = await bcrypt.hash("password", 10)  // saltRounds = 10 in User.js
    userData.push({ username, email, password });
  }
  const createdUsers = await User.collection.insertMany(userData);
  console.log('all done!');
  process.exit(0);
});