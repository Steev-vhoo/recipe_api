import { Router } from "express";
import { checkUserSession } from "../middleware/auth.js";
import { login, logout, profile, register } from "../controllers/user.js";

const userRouter = Router()

userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.post('/logout', checkUserSession, logout)

userRouter.get('/profile', checkUserSession, profile)

export default userRouter;