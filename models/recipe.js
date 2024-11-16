const mongoose=require('mongoose');

const recipeSchema=new mongoose.Schema({
   name: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model('Recipe',recipeSchema,'recipes');