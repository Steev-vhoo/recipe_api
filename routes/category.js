import { Router } from "express";
import { getCategory, postCategory } from "../controllers/category.js";


//Create a router
const categoryRouter = Router()

//Define routes
categoryRouter.get('/categories', getCategory)
categoryRouter.post('/categories', postCategory)
// categoryRouter.patch()
// categoryRouter.delete()

//Export router
export default categoryRouter;