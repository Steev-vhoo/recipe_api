import { RecipeModel } from "../models/recipe.js";


export const getRecipes = async (req, res, next) => {
    try {
        //Get query params
        const { limit, skip, search } = req.query;
        //Get all recipes from database
        const allRecipes = await RecipeModel
            .find({ name: search })  //You can search on the name
            .limit(limit)  //To default the limit, you may use ||
            .skip(skip)    // You can skip some queries
        //Return all recipes
        res.json(allRecipes)
    } catch (error) {
        next(error);
    }
}

export const addRecipes = async (req, res, next) => {

    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        //Return response
        res.json(`Recipe Added`) //Update
    } catch (error) {
        next(error);
    }
}

export const updateRecipe = async (req, res, next) => {

    try {
        //Update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //Return response
        res.json(updatedRecipe)
    } catch (error) {
        next(error)
    }
}

export const deleteRecipe = async (req, res, next) => {
    try {
        //Delete recipe by ID
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id)
        //Return response
        res.json(deletedRecipe)

    } catch (error) {
        next(error)
    }
}

export const getRecipe = async (req, res, next) => {
    try {
        const gotRecipe = await RecipeModel.findById(req.params.id)
        res.json(gotRecipe)
    } catch (error) {
        next(error)
    }
}

export const signupRecipe = (req, res) => {
    res.json(`Account created successfully`)
}
