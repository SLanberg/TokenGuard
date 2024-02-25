import { Response } from 'express';
import { sign } from 'jsonwebtoken';

export const generateAndSetCookies = (
	user_id: number,
	accessTokenSecret: string,
	res: Response
): {
	accessToken: string
} => {
	const accessToken = sign({ id: user_id },
																					accessTokenSecret,
																		{ expiresIn: '1d' });
	
	return { accessToken }
};



