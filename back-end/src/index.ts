import express, { Application, Request, Response, NextFunction } from "express";
import config from "config"; 
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"
import keyRoutes from "./routes/key.js"



const app: Application = express();

const port: number = config.get("server.port");

app.use(
  cors({
    origin: "*",
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});



app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/secretkey", keyRoutes);


app.listen(port,()=>{
  console.log(`Server is listening at port :${port}`);
});

