import { CategoryModel } from "../models/category.js";


export const getCategory = async (req, res, next) => {
    try {
        //Get all categories from database
        const allCategory = await CategoryModel.find()
        //Return all categories
        res.json(allCategory)
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
         //Add categories to database
         const newCategory = await CategoryModel.create(req.body)
         //Return all categories
         res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}