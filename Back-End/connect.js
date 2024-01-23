import pkg from 'pg';
const { Client } = pkg;

import dotenv  from "dotenv";

dotenv.config();

const db = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const connectDb = async () => {
    try {
        await db.connect();
        await db.query('SELECT * FROM users');
        await db.end();
    } catch (error) {
        console.log(error);
    }
}

connectDb();


export { db };
