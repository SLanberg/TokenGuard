import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { connectDB } from "../connect.js";

export const getSecretKey = async (req: Request, res: Response) => {
  const accessToken = req.cookies.JWT;
  if (!accessToken) return res.status(401).json({type:"error",response:"Not authorized"});

  let userData: any;

  jwt.verify(accessToken, "Secret Key",(err, decodedData)=>{
    if (err) return res.status(403).json({type:"error",response:"Invalid token"});
    userData = decodedData;
  })


  let db: any;

  try {
    db = await connectDB();
    const query = `SELECT keys.secretkey 
    FROM tokenguard.keys
    JOIN tokenguard.tokens
    ON tokens.id = keys.tokenid
    WHERE tokens.userid = ($1) ;`

    const result = await db.query(query, [userData.id]);
    
    if (result.rows.length == 0) return res.status(409).json({type:"error", response:"Invalid Token"});
    
    return res.status(200).json({secretkey: result.rows[0].secretkey});
  } catch (error) {
    console.log(error);
    return res.status(500).json({type:"error", response:"Server Internal Error"});
  } finally {
    await db.end();
  }
}
