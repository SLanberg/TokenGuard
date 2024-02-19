import { Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';

export const Refresh = async (req: Request, res: Response) => {
	try {

		const request_body = req;
		const cookie = req.cookies['access_token'];
		const cookie1 = req.cookies['refresh_token'];

		console.log(`Refresh triggered`);
		console.log(request_body);
		console.log(`Here is supposed to be a cookie: ${cookie}`);
		console.log(`Here is supposed to be a cookie: ${cookie1}`);

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