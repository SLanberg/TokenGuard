import {Request, Response} from "express";
import {verify} from "jsonwebtoken";
import {dataSource} from "../index";
import {User} from "../entity/user.entity";
import {SecurityToken} from "../entity/securityToken.entity";

export const SecretKey = async (req: Request, res: Response) => {
    const cookie = req.cookies['access_token'];
    const securityToken = req.body.token;

    const payload: any = verify(cookie, process.env.ACCESS_SECRET || '');

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

    const token = dataSource.getRepository(SecurityToken).
    createQueryBuilder("token")
        .leftJoinAndSelect('token.secret_code_id', 'secret_code.id')
        .leftJoinAndSelect('token.user_id', 'user.id')
        .where('token.security_token = :security_token', { security_token: securityToken })
        .getOneOrFail()

    try {
        const tokenObj = await (token);

        const data = JSON.stringify(tokenObj);
        const parsedData = JSON.parse(data);
        const userId = parsedData.user_id.id;

        if (payload.id === userId) {
            res.send(parsedData.secret_code_id.code);
        } else {
            console.log('Not for you, warn user about possible token leak')
        }
    } catch (e) {
        console.log(e);
    }
}