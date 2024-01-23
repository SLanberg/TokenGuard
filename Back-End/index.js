import express from "express";
import config from "config"; 
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"


const app = express();

const port = config.get("server.port");

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});



app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.listen(port,()=>{
  console.log(`Server is listening at port :${port}`);
});

