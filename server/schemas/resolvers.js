
const { User } = require('../models/user');
const { signToken } = require('../utils/Auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },

    user: async (parent, { userId }) => {
      return user.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return user.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
  Mutation: {
    adduser: async (parent, { name, email, password }) => {
      const user = await user.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;