import { Request, Response } from "express";

export const insertProduct = async (req: Request, res: Response) =>{
    try {
        const {name, description, price, size,image,
            isNew,quantity,discount,category
        } = req.body
        
    } catch (error) {
        
    }
}