import { Request, Response} from "express"
import User from "../models/user.model";
import jwt = require("jsonwebtoken");


export const signup = async ( req:Request, res:Response) => {
   try {
    const {firstname, email , password} = req.body;
    if( !firstname || !email || !password) {
       res.status(400).json({message: "Must not be null"})
    }
      const createdUser = await User.create({firstname, email, password, phoneNumber: ""})
      
      res.status(201).json({ message: "success", user: createdUser})
   } catch (error) {
    res.status(201).json({message: "server error", error: error})
   } 
}

export const login = async( req:Request, res:Response) => {
   try {
      const { email, password } = req.body;
   if( !email  || !password) {
      res.status(400).json({message: "Must not be null"})
   }
   const loggedUser = await User.create ({ email, password})

   res.status(200).json( {message: "Login success", user: loggedUser})
   } catch (error) {
      res.status(201).json({ message: "server error", error: error})
   }
    
}