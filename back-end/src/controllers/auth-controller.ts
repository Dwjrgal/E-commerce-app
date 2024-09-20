import { Request, Response} from "express"
import User from "../models/user.model";

export const signup = async ( req:Request, res:Response) => {
     const {name, email , password} = req.body;

     if( !name || !email || !password) {
        res.status(400).json({message: "Must not be null"})
     }

       const createdUser = await User.create({name, email, password, phoneNumber: ""})
       res.status(201).json({ message: "success", user: createdUser})
}

 export const login = ( req:Request, res:Response) => {
    res.status(200).json( {message: "Login success"})
}