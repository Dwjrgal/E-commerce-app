import express,{ Request, Response } from "express";

import dotenv from "dotenv";

import authRoute from "./routes/auth-route"
import { connectDB } from "./config/db";

dotenv.config();

const PORT:string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express s  application object uusgej avav

const app = express();
app.use(express.json())
app.use("/api/v1/auth", authRoute)

//middlewares

app.get("/",(req: Request, res: Response) => {
    res.send("Welcome e-commerce API server")
});

connectDB(MONGO_URI);

//server asaah 
app.listen(PORT, () => {console.log(`server running at localhost:${PORT}`)})