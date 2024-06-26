
import express from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

//Connect to database
await mongoose.connect(process.env.mongo_url)

//Create express app
const app = express();

//Apply middleware
app.use(express.json())

// Use Routes
app.use(recipeRouter);

// //Define route
app.get('/home', (req, res) => {
    res.json(`Welcome Home`)
})
app.post('/login', (req, res) => {
    res.json(`login successful`)
})
app.patch('/signup', (req, res) => {
    res.json(`Account created successfully`)
})

app.delete('/cancel', (req, res) => {
    res.json(`Account deleted`)
})



// Listen for incoming request
app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});





// dRHn4M3Cp5w3b9Ja