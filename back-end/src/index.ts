import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoute from "./routes/auth-route";
import catRoute from "./routes/category-route";
import { sendEmail } from "./utils/send-email";
import productRoute from "./routes/product-route";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express s  application object uusgej avav
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/categories", catRoute);
app.use("/api/v1/products", productRoute);
app.get("/", async (req: Request, res: Response) => {
  // const rndOtp = Math.floor(Math.random() * 10_000)
  //   .toString()
  //   .padStart(4, "0");
  //   sendEmail("dwjrgl651@gmail.com", rndOtp)
  res.send("Welcome E-Commerce API Server");
});

connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`server running at localhost:${PORT}`);
});
