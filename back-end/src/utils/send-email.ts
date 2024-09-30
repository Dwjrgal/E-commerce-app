import nodemailer from "nodemailer";
import { generateHTMLTemplate } from "./generateHTMLTemplate";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: "davaajargalnasantogtokh@gmail.com",
    to: email,
    subject: "Hello World",
    html: generateHTMLTemplate(otp),
  });
};
