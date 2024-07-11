import { CategoryModel } from "../models/category.js";


export const getCategory = async (req, res, next) => {
    try {
        //Get query params
        const {
            filter = "{}",
            sort = "{}",
            fields = "{}",
            limit = 0,
            skip = 0
        } = req.query;
        //Get all categories from database
        const allCategory = await CategoryModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)  //To default the limit, you may use ||
            .skip(skip)
        //Return all categories
        res.json(allCategory)
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        //Add categories to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        })
        //Return all categories
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}