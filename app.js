const express=require('express');
const app=express();
const recipeRouter=require('./routes/recipeRoutes');
app.use(express.json());


app.use('/api/v1/recipes', recipeRouter);


module.exports=app;