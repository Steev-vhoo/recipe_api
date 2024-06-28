
import express from "express";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";

//Connect to database
await mongoose.connect(process.env.mongo_url);

//Create express app
const app = express();

//Apply middleware
app.use(express.json());

// Use Routes
app.use(recipeRouter);
app.use(categoryRouter);



// Listen for incoming request
const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
});





// dRHn4M3Cp5w3b9Ja