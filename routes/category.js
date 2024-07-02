import { Router } from "express";
import multer from "multer";  //For uploading files
import { localUpload } from "../middleware/uploads.js";
import { getCategory, postCategory } from "../controllers/category.js";


//Create upload middlesware
const upload = multer({ dest: 'uploads' })


//Create a router
const categoryRouter = Router()

//Define routes
categoryRouter.get('/categories', getCategory)
categoryRouter.post('/categories', localUpload.single('image'), postCategory)
// categoryRouter.patch()
// categoryRouter.delete()

//Export router
export default categoryRouter;