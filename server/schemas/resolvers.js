const { User } = require('../models/user');

const resolvers = {
  Query: { user: async () => {
    return User.find({});
  }, },
  //Mutation: { },
};

module.exports = resolvers;