import { Response, Request } from 'express';

export const Logout = async (_req: Request, res: Response) => {
	res.cookie('session', '', { maxAge: 0, httpOnly: true, sameSite: 'lax' });
	// res.cookie('refresh_token', '', { maxAge: 0, httpOnly: true, sameSite: 'lax' });

	res.send({
		message: 'success'
	});
}