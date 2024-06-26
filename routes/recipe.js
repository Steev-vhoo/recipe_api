import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

//Create a router
const recipeRouter = Router()

recipeRouter.get('/recipes', (req, res) => {
    res.json(`All recipes`)
})

recipeRouter.post('/addrecipes', async (req, res) => {

    //Add recipe to database
    await RecipeModel.create(req.body);
    //Return response
    res.json(`Recipe Added`) //Update
})

recipeRouter.patch('/addrecipes/:id', (req, res) => {
    res.json(`Recipe with ID: ${req.params.id} updated`) //Delete
})

recipeRouter.delete(`/deleterecipe/:id`, (req, res) => {
    res.json(`Recipe with ID: ${req.params.id} deleted`)
})
recipeRouter.get(`/recipes/:id`, (req, res) => {
    res.json(`Recipe with ID: ${req.params.id} retrieved`)
})

recipeRouter.patch('/signup', (req, res) => {
    res.json(`Account created successfully`)
})

//Export router
export default recipeRouter;
