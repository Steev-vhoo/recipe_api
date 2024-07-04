import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipe, getRecipes, signupRecipe, updateRecipe } from "../controllers/recipe.js";
import { remoteUpload } from "../middleware/uploads.js";

//Create a router
const recipeRouter = Router()


//Define routes
recipeRouter.get('/recipes', getRecipes)

recipeRouter.post('/recipes', remoteUpload.single('image'), addRecipes)

recipeRouter.patch('/recipes/:id', updateRecipe)

recipeRouter.delete(`/recipes/:id`, deleteRecipe)

recipeRouter.get(`/recipes/:id`, getRecipe)

recipeRouter.patch('/signup', signupRecipe)

//Export router
export default recipeRouter;
