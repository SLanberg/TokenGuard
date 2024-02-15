import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { dataSource } from "../index";
import { User } from "../entity/user.entity";
import { SecurityToken } from "../entity/securityToken.entity";

export const SecretKey = async (req: Request, res: Response) => {
    const cookie = req.cookies['access_token'];
    const securityToken = req.body.token;

    if (!cookie) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }

    let payload: any;
    try {
        payload = verify(cookie, process.env.ACCESS_SECRET || '');
    } catch (error) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }

    if (!payload) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }

    const user = dataSource.getRepository(User).findOne({
        where: {id: payload.id}
    });
    if (!user) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }

    try {
        const token = dataSource.getRepository(SecurityToken).
            createQueryBuilder("token")
                .leftJoinAndSelect('token.secret_code_id', 'secret_code.id')
                .leftJoinAndSelect('token.user_id', 'user.id')
                .where('token.security_token = :security_token', {security_token: securityToken})
                .getOneOrFail()
                const tokenObj = await (token);

            const data = JSON.stringify(tokenObj);
            const parsedData = JSON.parse(data);
            const userId = parsedData.user_id.id;

            if (payload.id === userId) {
                res.send(parsedData.secret_code_id.code);
            } else {
                // User account can be warned about possibility of the token leak
                // message notifying that there was an attempt with the timestamp to access token from another account
                return res.status(401).json({type: "error",
                    issueWith: "TelegramID",
                    response: "Incorrect Token"});
            }
    } catch (e) {
        return res.status(401).json({type: "error",
            issueWith: "TelegramID",
            response: "Incorrect Token"});
    }
}