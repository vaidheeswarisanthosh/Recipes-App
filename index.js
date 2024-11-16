const mongoose=require('mongoose');
const app=require('./app');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to DB");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port " +process.env.PORT);
    });
})

.catch((error)=>{
    console.log('Connection failed!');
    console.log(error);
})