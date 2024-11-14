const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [
    {
        type: String
    }
  ],
  steps: [
    {
        type: String
    }
  ],
  allergens: [
    {
        type: String
    }
  ],
  creator: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
