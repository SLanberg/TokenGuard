import { Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';

export const Refresh = async (req: Request, res: Response) => {
	try {
		const cookie = req.cookies['access_token'];

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
			maxAge: 24 * 60 * 60 * 1000 // 1 day
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