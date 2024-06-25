import { Router } from "express";

//Create a router
const recipeRouter = Router()

recipeRouter.get('/recipes', (res, req) => {
    res.json(`All recipes`)
})

recipeRouter.post('/addrecipes', (res, req) => {
    res.json(`Recipe added`) //Update
})

recipeRouter.patch('/addrecipes/:id', (res, req) => {
    res.json(`Recipe with ID: ${req.params.id} updated`) //Delete
})

recipeRouter.delete(`/deleterecipe/:id`, (res, req) => {
res.json(`Recipe with ID: ${req.params.id} deleted`)
})

recipeRouter.patch('/signup', (req, res) => {
    res.json(`Account created successfully`)
})

//Export router
export default recipeRouter;
