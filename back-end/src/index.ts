import express,{ Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.get("/",(req: Request, res: Response) => {
    res.send("Welcome e-commerce API server")
});

app.listen(PORT, () => {console.log(`server running at localhost:${PORT}`)})