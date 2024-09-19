import express,{ Request, Response } from "express";

import dotenv from "dotenv";

import authRoute from "./routes/auth-route"

dotenv.config();

const PORT = process.env.PORT

//express s  application object uusgej avav
const app = express();
app.use("api/v1/auth", authRoute)

//middlewares

app.get("/",(req: Request, res: Response) => {
    res.send("Welcome e-commerce API server")
});

//server asaah 
app.listen(PORT, () => {console.log(`server running at localhost:${PORT}`)})