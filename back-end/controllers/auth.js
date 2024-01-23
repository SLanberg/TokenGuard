//import bcrypt from "bcryptjs";

//import jwt from "jsonwebtoken";
import { db } from "../connect.js";

export const signup =  (req, res) => {
  console.log("Request:", req)
  // try {
  //   await db.connect();
  //   await db.query('SELECT * FROM users');
  //   await db.end();
  // } catch (error) {
  //    console.log(error);
  // }   
}



export const signin = (req, res) => {


}

export const logout = (req, res) => {
  res.clearCookie("JWT",{
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out!")
}