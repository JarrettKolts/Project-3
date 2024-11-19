const { User, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // GETTING ALL USERS
    profiles: async () => {
      return User.find().populate('savedRecipes');
    },
    // GETTING SPECIF USER BY USERNAME
    profile: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedRecipes');
    },
    // GETTING CURRENTLY LOGGEDIN USER
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedRecipes');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    // FOR CREATING A NEW USER
    addProfile: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // ACTION FOR AUTHENTICATING USER BY EMAIL AND PASSWORD
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    
  }
};

module.exports = resolvers;
