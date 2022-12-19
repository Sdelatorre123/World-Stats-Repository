const { User } = require('../models/user');
const { signToken } = require('../utils/Auth');
const { Thread } = require('../models/Thread')

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },

    user: async (parent, { userId }) => {
      return user.findOne({ _id: userId });
    },

    /*  me: async (parent, args, context) => {
       if (context.user) {
         return user.findOne({ _id: context.user._id });
       }
       throw new AuthenticationError('You need to be logged in!');
     }, */

  },
  Mutation: {
    adduser: async (parent, { username, email, password }) => {
      const user = await user.create({ username, email, password });
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


  
   Query: {
     threads: async () => {
       return Thread.find().sort({ createdAt: -1 });
     },
 
     thread: async (parent, { threadID }) => {
       return Thread.findOne({ _id: threadID });
     },
   }, 

  Mutation: {
    addThread: async (parent, { threadText, threadAuthor }) => {
      return Thread.create({ threadText, threadAuthor });
    },
    addComment: async (parent, { threadId, commentText }) => {
      return Thread.findOneAndUpdate(
        { _id: threadId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThread: async (parent, { threadId }) => {
      return Thread.findOneAndDelete({ _id: threadId });
    },
    removeComment: async (parent, { threadId, commentId }) => {
      return Thread.findOneAndUpdate(
        { _id: threadId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    }, 
  },
};



module.exports = resolvers;