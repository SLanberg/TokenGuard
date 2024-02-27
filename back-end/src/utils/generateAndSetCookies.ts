import { Response } from 'express';
import { sign } from 'jsonwebtoken';


// TODO: Here of course for the security reasons we need work with the refresh token
export const generateAndSetCookies = (
	user_id: number,
	accessTokenSecret: string,
	res: Response
): {
	accessToken: string
} => {
	const accessToken = sign({ id: user_id }, accessTokenSecret,
		{ expiresIn: '1d' });
	
	return { accessToken }
};



