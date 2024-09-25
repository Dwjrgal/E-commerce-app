import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoute from "./routes/auth-route";
import catRoute from "./routes/category-route";
import { generateHTMLTemplate } from "./utils/generateHTMLTemplate";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express s  application object uusgej avav
const app = express();

//middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/categories", catRoute);
app.use(cors());

// app.get("/", async (req: Request, res: Response) => {
//   const rndOtp = Math.floor(Math.random() * 10_000)
//     .toString()
//     .padStart(4, "0");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: true, // true for port 465, false for other ports
//   auth: {
//     user: "dwjrgl651@gmail.com",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });

connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`server running at localhost:${PORT}`);
});
