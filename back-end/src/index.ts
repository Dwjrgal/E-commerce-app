
import express,{ Request, Response } from "express";

import dotenv from "dotenv";
import cors from "cors"
import authRoute from "./routes/auth-route"
import { connectDB } from "./config/db";
// import { Resend } from "resend";
import { Resend } from 'resend';

// import Resend
import { generateHTMLTemplate } from "./utils/generateHTMLTemplate";

dotenv.config();

const PORT:string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express s  application object uusgej avav


const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
app.use(express.json())
app.use(cors())
app.use("/api/v1/auth", authRoute)

//middlewares

app.get("/", async (req: Request, res: Response) => {
    const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, '0')
    const {data, error} = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['dwjrgl651@gmail.com'],
        subject: 'hello world',
        html: generateHTMLTemplate(rndOtp)
      });
      if (error ) {
        console.log ("Email error ", {error})
      }
      res.send("Welcome e-commerce API server")
});

connectDB(MONGO_URI);

//server asaah 
app.listen(PORT, () => {console.log(`server running at localhost:${PORT}`)})