import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { connectDB } from "../connect.js";
import { generateToken } from "../utils/token.js";

export const signUp = async (request: Request, response: Response) => {
  
  const telegramID = request.body.telegramID;
  const password = request.body.password;

  if (telegramID === null || !parseInt(telegramID) || password === null) {
    return response.status(400).json({response:"You need correctly to fill all fields!"});
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const values = [telegramID, hashedPassword];
  
  let db: any;

  try {
    db = await connectDB();
    const query = 'SELECT telegramID from tokenguard.users WHERE telegramID = ($1)';
    const result = await db.query(query, [telegramID]);
    if (result.rows.length > 0) {
      return response.status(409).json({type:"error", field:'TelegramID', response:"TelegramID already in use"});
    }
  } catch (error) {
    console.log(error);
     return response.status(500).json({type:"error", response:"Server Internal Error"});
  } finally {
    await db.end();
  }

  let userData: any;
  
  try {
    db = await connectDB();
    const query = 'INSERT INTO tokenguard.users (telegramID, password) VALUES ($1, $2) RETURNING *';
    const result = await db.query(query, values);
    userData = { ...result.rows[0], password: undefined };
  } catch (error) {
     console.log(error);
     return response.status(500).json({type:"error", response:"Server Internal Error"});
  } finally {
    await db.end();
  }

  let tokenData: any;

  try {
    db = await connectDB();
    const token = generateToken(telegramID);

    const values = [userData.id, token];

    const query = 'INSERT INTO tokenguard.tokens (userID, token) VALUES ($1, $2) RETURNING *';
    
    const result = await db.query(query, values);
    tokenData = result.rows[0];
  } catch (error) {
    console.log(error);
    return response.status(500).json({type:"error", response:"Server Internal Error 500"});
  } finally {
    await db.end();
  }

  userData.password = request.body.password;

  try {
    db = await connectDB();

    const secretKey = 94592942990;

    const values = [tokenData.id, secretKey];

    const query = 'INSERT INTO tokenguard.keys (tokenID, secretKey) VALUES ($1, $2)';
    await db.query(query, values);

    const jwtCookie = jwt.sign({id: userData.id}, "key");

    response.cookie("JWT", jwtCookie,{
        httpOnly: true,
    })
    .status(201).json(
      {
        type: "success",
        message: "User registered",
        jwt: jwtCookie,
        user: userData,
        token: tokenData.token,
        createdAt: tokenData.createdat
      }
    )
  } catch (error) {
    console.log(error);
    return response.status(500).json({type:"error", response:"Server Internal Error"});
  } finally {
    await db.end();
  }
}

export const signIn = async (req: Request, res: Response) => {
  const telegramID = req.body.telegramID;
  const password = req.body.password;

  if (telegramID === null || !parseInt(telegramID) || password === null) {
    return res.status(400).json({ field:'TelegramID', response:"There should be no empty fields" });
  }
  
  let db: any;

  try {
    db = await connectDB();

    const query = 'SELECT * from tokenguard.users WHERE telegramID = ($1)';

    const result = await db.query(query, [telegramID,]);

    if (result.rows.length == 0) {
      return res.status(401).json({ type:"error", field:'TelegramID', response:"Incorrect TelegramID or Password!" });
    }

    const checkPassword = bcrypt.compareSync(password, result.rows[0].password)
    if (!checkPassword) return res.status(401).json({ type:"error", response:"Incorrect TelegramID or Password!" });
    const userData = result.rows[0];
    
    const jwtCookies = jwt.sign({ id: userData.id }, "key");

    res.cookie("JWT",jwtCookies,{
    })
        .status(302).json(
        {
          jwt: jwtCookies,
          type: "success",
          message: 'User successfully authorized!',
        }
    )

  } catch (error) {
    console.log(error)
    return res.status(500).json({ type:"error", response:"Server Internal Error" });
  } finally{
    await db.end();
  }
}

export const logout = (req: Request, res: Response) => {
  res.clearCookie("JWT",{
    secure: true,
    sameSite: "none"
  }).status(200).json({ type:"success", response:"User has been logged out" });
}
