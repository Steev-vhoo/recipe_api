import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipe, getRecipes, signupRecipe, updateRecipe } from "../controllers/recipe.js";
import { localUpload } from "../middleware/uploads.js";

//Create a router
const recipeRouter = Router()


//Define routes
recipeRouter.get('/recipes', getRecipes)

recipeRouter.post('/addrecipes', localUpload.single('image'), addRecipes)

recipeRouter.patch('/addrecipes/:id', updateRecipe)

recipeRouter.delete(`/deleterecipe/:id`, deleteRecipe)

recipeRouter.get(`/recipes/:id`, getRecipe)

recipeRouter.patch('/signup', signupRecipe)

//Export router
export default recipeRouter;
