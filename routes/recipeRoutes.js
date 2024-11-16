const express=require('express');
const recipeControllers=require('../controllers/recipeControllers');
 
const recipesRouter=express.Router();
recipesRouter.get('/',recipeControllers.getAllRecipes);
recipesRouter.post('/',recipeControllers.createRecipe);
recipesRouter.get('/:id',recipeControllers.getRecipeById);
recipesRouter.put('/:id',recipeControllers.updateRecipe);
recipesRouter.delete('/:id',recipeControllers.deleteRecipe);



module.exports = recipesRouter;