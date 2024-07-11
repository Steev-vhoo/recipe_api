
import express from "express";
import cors from "cors"; //To connect with frontend
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";
import session from "express-session";
import MongoStore from "connect-mongo";//import mongodb store 
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator" //install for documentation
import { Cookie } from "express-session";

//Connect to database
await mongoose.connect(process.env.mongo_url);
console.log("Connected to User Database")


//Create express app
const app = express();

//For documentation
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tag: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames()
});

//Apply middleware
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.mongo_url}),
    cookie: {secure: true}
}))



// Use Routes
app.use(recipeRouter);
app.use(categoryRouter);
app.use(userRouter);
//For documentation
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));




// Listen for incoming request
const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
});
