const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postsRoute = require("./routes/posts")


dotenv.config();




const uri = "mongodb+srv://blessingnjoku:media@cluster0.9ihdcne.mongodb.net/media?retryWrites=true&w=majority"

mongoose.connect(uri)
   .then(() => {
       console.log('Connected to MongoDB');
       // Add your routes and middleware here
    
   })
   .catch((error) => {
       console.error('Failed to connect to MongoDB:', error.message);
   });


// middleware
   app.use(express.json())
   app.use(helmet())
   app.use(morgan("common"))
   
   app.use("/api/users", userRoute);
   app.use("/api/auth", authRoute);
   app.use("/api/posts", postsRoute);

   
 


   app.listen(8800, () => {
    console.log("Running on port 8800");
});

