import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";


export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, email, password } = req.body;
    if (!firstname || !email || !password) {
      res.status(400).json({ message: "Must not be null" });
    }
    const createdUser = await User.create({
      firstname,
      email,
      password,
      phoneNumber: "",
    });

    res.status(201).json({ message: "success", user: createdUser });
  } catch (error) {
    res.status(201).json({ message: "server error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Must not be null" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }

    const isCheck = bcrypt.compareSync(
      password,
      user?.password.toString() || ""
    );

    if (!isCheck) {
      res.status(400).json({
        message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
      });
    }

    const token = generateToken({ id: user?._id });
    res.status(200).json({ message: "Login success", token: token });
  } catch (error) {
    res.status(201).json({ message: "server error", error: error });
  }
};
