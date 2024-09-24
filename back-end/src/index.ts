import dotenv from "dotenv";
dotenv.config();


import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoute from "./routes/auth-route";
import { Resend } from "resend";
import { generateHTMLTemplate } from "./utils/generateHTMLTemplate";


const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express s  application object uusgej avav

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);



//middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute
);
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["dwjrgl651@gmail.com"],
    subject: "hello world",
    html: generateHTMLTemplate(rndOtp),
  });
  if (error) {
    console.log("Email error ", { error });
  }
  res.send("Welcome e-commerce API server");
});

connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`server running at localhost:${PORT}`);
});
