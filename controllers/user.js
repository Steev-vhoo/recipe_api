import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
   try {
     // hash user password
     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
     //create a new user 
    const user =  await UserModel.create({
         ...req.body,
         password: hashedPassword
     })
     //Generat session
     req.session.user = { id: user.id }
     //Return responses
     res.status(201).json({message: `User registered successfully`})
   } catch (error) {
    next(error)
   }
}

export const login = async (req, res, next) => {
    const { email, password, phone, username } = req.body;
    //Find a user using their unique identifier
    try {
        const user = await UserModel.findOne({
            $or: [
                { email: email },
                { username: username },
                { phone: phone }
            ]

        });
        if (!user) {
            return res.status(401).json({ error: `No User Found` })
        }
        //Verify their password
        const correctPassword = bcrypt.compareSync(password, user.password)
        if (!correctPassword) {
            res.status(401).json({ error: `Invalid credentials` })
        } else {
            //Generate a session
            req.session.user = { id: user.id }
            //Return response
            return res.status(200).json(`Login Successful`)
        }
    } catch (error) {
        next(error)
    }

}


export const profile = async (req, res, next) => {
    try {
        //Find user by id
        const user = await UserModel
            .findby(req.session.id)
            .select({ password: false });
        //Return response
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    try {
        //Destroy user session
    await req.session.destroy();
        //Return response
        res.status(200).json({message: `User logout successfully`})
    } catch (error) {
        next(error);
    }
}