import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";

interface IMyRequest extends Request {
  user: string | object;
}

declare global {
  namespace Express {
    interface Request {
      user: string | object;
    }
  }
}

const auth = (req: IMyRequest, res: Response, next: NextFunction) => {
  console.log("Check the logged in user", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Please log in" });
  }
  const token = req.headers.authorization?.split(" ")[1];
  const user = decodeToken(token);
  console.log("token", user);
  req.user = user;
  next();
};
module.exports = { auth };
