
import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator" //install for documentation

//Connect to database
await mongoose.connect(process.env.mongo_url);

//Create express app
const app = express();

//For documentation
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs:true,
    tag: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames()
});

//Apply middleware
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'));



// Use Routes
app.use(recipeRouter);
app.use(categoryRouter);
//For documentation
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));




// Listen for incoming request
const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
});





// dRHn4M3Cp5w3b9Ja