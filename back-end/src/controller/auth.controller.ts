import { Request, Response } from "express";
import { dataSource } from "../index";
import { User } from "../entity/user.entity";
import bcryptjs from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { generateToken } from "../utils/tokenGeneration";
import { SecurityToken } from "../entity/securityToken.entity";
import { SecretCode } from "../entity/secretCode.entity";

import { generateAndSetCookies } from '../utils/generateAndSetCookies';

export const Register = async (req: Request, res: Response) => {
    // This should be done of course at the back-end and be hashed.
    const secretKey: bigint = BigInt("94592942990");

    const {password, telegramID} = req.body;

    try {
        const isUserInDb = await dataSource.getRepository(User).count({
            where: {
                telegram_id: telegramID,
            },
        });

        if (isUserInDb !== 0) {
            return res.status(409).json({
                type: "error",
                issueWith: "TelegramID",
                response: "Telegram ID already used"});
        }
    } catch (e) {
        return res.status(500).json({type: "error", issueWith: "TelegramID", response: "Server Internal Error"});
    }

    try {
        const [user] = await Promise.all([dataSource.getRepository(User).save({
            telegram_id: telegramID,
            password: await bcryptjs.hash(password, 12),
        })]);

        // There is very useful createQueryRunner() function for now skip it but implement after
        if (!user) {
            return res.status(500).json({type: "error", response: "User creation failed"});
        }

        const accessTokenSecret = process.env.ACCESS_SECRET || '';
        const refreshTokenSecret = process.env.REFRESH_SECRET || '';
        generateAndSetCookies(user.id, accessTokenSecret, refreshTokenSecret, res);

        const secretCode = await dataSource.getRepository(SecretCode).save({
            code: secretKey,
        });

        const userInDb = await dataSource.getRepository(User).findOne({
            where: {telegram_id: (telegramID)}
        });

        const securityToken = await dataSource.getRepository(SecurityToken).save({
            user_id: user.id,
            secret_code_id: secretCode.id,
            security_token: generateToken(user.id),
        });

        return res.send({
            status: 200,
            type: 'success',
            securityToken: securityToken,
            user: userInDb
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({type: "error", response: "Server Internal Error"});
    }
}

export const Login = async (req: Request, res: Response) => {
    const {password, telegramID} = req.body;
    const user = await dataSource.getRepository(User).findOne({
        where: {telegram_id: telegramID},
    });

    if (!user) {
        return res.status(400).send({
            type: "error",
            issueWith: "TelegramID",
            message: 'Invalid credentials'
        })
    }

    if (!await bcryptjs.compare(password, user.password)) {
        return res.status(400).send({
            type: "error",
            issueWith: "TelegramID",
            message: 'Invalid credentials'
        })
    }

    const accessTokenSecret = process.env.ACCESS_SECRET || '';
    const refreshTokenSecret = process.env.REFRESH_SECRET || '';
    generateAndSetCookies(user.id, accessTokenSecret, refreshTokenSecret, res);

    res.send({
        type: 'success',
    });
}

export const AuthenticatedUser = async (req: Request, res: Response) => {
    try {
        const cookie = req.cookies['access_token'];

        if (!cookie) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const payload: any =
            verify(cookie, process.env.ACCESS_SECRET || '');

        if (!payload) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const user = await dataSource.getRepository(User).findOne({
            where: {id: payload.id}
        });

        if (!user) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const {password, ...data} = user;

        res.send(data);
    } catch (e) {
        console.log(e)

        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
}

export const Refresh = async (req: Request, res: Response) => {
    try {
        const cookie = req.cookies['refresh_token'];

        if (!cookie) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const payload: any = verify(cookie, process.env.REFRESH_SECRET || '');

        if (!payload) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const accessToken = sign({
            id: payload.id
        }, process.env.ACCESS_SECRET || '', {expiresIn: '30s'});
        res.cookie('access_token', accessToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 24*60*60*1000 // 1 day
        });

        res.send({
            message: 'success'
        });
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
}

export const Logout = async (req: Request, res: Response) => {
    res.cookie('access_token', '', { maxAge: 0, httpOnly: true, sameSite: 'lax' });
    res.cookie('refresh_token', '', { maxAge: 0, httpOnly: true, sameSite: 'lax' });

    res.send({
        message: 'success'
    });
}
