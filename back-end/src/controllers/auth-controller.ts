import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, email, password } = req.body;
    if (!firstname || !email || !password) {
      return res.status(400).json({ message: "Must not be null" });
    }
    const createdUser = await User.create({
      firstname,
      email,
      password,
      phoneNumber: "",
    });

    res.status(200).json({ message: "success", user: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Must not be null" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(
        password,
        user?.password.toString() || ""
      );
      if (!isCheck) {
        return res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = generateToken({ id: user?._id });
        res.status(200).json({ message: "Login success", token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "server error", error: error });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "Success" });
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }

    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = otp;
    await findUser.save();
    console.log("find user", findUser);
    await sendEmail(email, otp);
    res.status(200).json({ message: "OTP code is sent email successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, value } = req.body;
  console.log("first", email, value);
  const findUser = await User.findOne({ email: email, otp: value });
  console.log("findUser", findUser);
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Бүртгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй" });
  }

  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();
  console.log("idk", resetToken);
  await sendEmail(
    email,
    `<a href="http://localhost:3000/newpass?resettoken="${resetToken}"">Нууц үг сэргээх холбоос</a>`
  );
  res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now },
  });

  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" });
  }

  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
};
