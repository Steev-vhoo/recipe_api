import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipe, getRecipes, signupRecipe, updateRecipe } from "../controllers/recipe.js";

//Create a router
const recipeRouter = Router()
0
//Define routes
recipeRouter.get('/recipes', getRecipes)

recipeRouter.post('/addrecipes', addRecipes)

recipeRouter.patch('/addrecipes/:id', updateRecipe)

recipeRouter.delete(`/deleterecipe/:id`, deleteRecipe)

recipeRouter.get(`/recipes/:id`, getRecipe)

recipeRouter.patch('/signup', signupRecipe)

//Export router
export default recipeRouter;
