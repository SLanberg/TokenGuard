require('dotenv').config()

import express from 'express';
import {DataSource} from "typeorm";
import {routes} from "./routes";
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "tokenguard",
    entities: [
        "src/entity/*.ts"
    ],
    logging: false,
    synchronize: true
})

dataSource.initialize()
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(cookieParser());
        app.use(cors({
            origin: ['http://localhost:5173'],
            credentials: true
        }));

        routes(app);

        app.listen(8000, () => {
            console.log('Listening to port 8000')
        });
    })
    .catch((err: Error) => {
        console.error('Error during Data Source', err)
    });
