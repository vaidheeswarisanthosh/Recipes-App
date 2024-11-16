const Recipe=require('../models/recipe');

const recipeControllers={
    getAllRecipes:async(request,response)=>{
       try{
           const recipes=await Recipe.find();
          
           response.status(200).json(recipes);
       }
       catch(error){
        response.status(500).json({ message: error.message });
       }
    },

    getRecipeById:async(request,response)=>{
        try{
            const {id}=request.params;
            const recipe=await Recipe.findById(id);
            response.status(200).json(recipe);
            
            if (!recipe) {
                return response.status(404).json({ message: 'Job not found' });
            }


        }
        catch(error){
            response.status(500).json({ message: error.message });
        }
    },

    createRecipe:async(request,response)=>{
        try{
            const{name,ingredients,instructions}=request.body;
            const newrecipe=new Recipe({
                name,ingredients,instructions
            })
            await newrecipe.save();
            response.status(201).json({ message: 'Recipe created successfully' });
        }
        catch(error){
            response.status(500).json({ message: error.message });
        }
     },
     updateRecipe:async(request,response)=>{
        try{
            const {id}=request.params;
            const {name,ingredients,instructions}=request.body;
            const recipe=await Recipe.findById(id);
            recipe.name=name;
            await recipe.save();
            response.status(200).json({message:"Recipe updated successfully"});
        }
        catch(error){
             response.status(500).json({message:error.message});
        }
     },
     deleteRecipe:async(request,response)=>{
        try{
            const {id}=request.params;
            const recipe=await Recipe.findByIdAndDelete(id);
            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found' });
            }
            response.status(200).json({message:"Recipe deleted successfully"});

        }
        catch(error){
            response.status(500).json({message:error.message});
        }
     }

}
    
module.exports=recipeControllers;