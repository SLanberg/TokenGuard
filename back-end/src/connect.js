import pkg from 'pg';
const { Client } = pkg;

import dotenv from "dotenv";

dotenv.config();

const createDbClient = () => {
  return new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  });
}

const connectDB = async () => {
  const db = createDbClient();
  try {
    await db.connect();
    return db;
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

export { connectDB };