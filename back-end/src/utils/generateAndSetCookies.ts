import { Response } from 'express';
import { sign } from 'jsonwebtoken';

export const generateAndSetCookies = (
	user_id: number,
	accessTokenSecret: string,
	refreshTokenSecret: string,
	res: Response
): { refreshToken: string;
	accessToken: string
} => {
	const accessToken = sign({ id: user_id },
																					accessTokenSecret,
																		{ expiresIn: '1d' });

	const refreshToken = sign({ id: user_id },
																						refreshTokenSecret,
						 												{ expiresIn: '1w' });

	// res.cookie('access_token', accessToken, {
	// 	httpOnly: true,
	// 	sameSite: "lax",
	// 	maxAge: 24 * 60 * 60 * 1000 // 1 day
	// });
	// res.cookie('refresh_token', refreshToken, {
	// 	httpOnly: true,
	// 	sameSite: "lax",
	// 	maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
	// });

	return {accessToken, refreshToken}
};



