import { RecipeModel } from "../models/recipe.js";


export const getRecipes = async (req, res, next) => {
    try {
        //Get all recipes from database
        const allRecipes = await RecipeModel.find()
        //Return all recipes
        res.json(allRecipes)
    } catch (error) {
        next(error);
    }
}

export const addRecipes = async (req, res, next) => {

    try {
        //Add recipe to database
       const newRecipe = await RecipeModel.create(req.body);
        //Return response
        res.json(`Recipe Added`) //Update
    } catch (error) {
        next(error);
    }
}

export const updateRecipe =  (req, res) => {
    res.json(`Recipe with ID: ${req.params.id} updated`) //Delete
}

export const deleteRecipe =  async (req, res, next) => {
   try {
    //Delete recipe by ID
    const deletedRecipe =  await RecipeModel.findByIdAndDelete(req.params.id)
    //Return response
     res.json(deletedRecipe)

   } catch (error) {
    next(error)
   }
}

export const getRecipe = (req, res) => {
    res.json(`Recipe with ID: ${req.params.id} retrieved`)
}

export const signupRecipe = (req, res) => {
    res.json(`Account created successfully`)
}
