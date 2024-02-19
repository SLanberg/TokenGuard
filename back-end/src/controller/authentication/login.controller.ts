import { Request, Response } from 'express';
import { dataSource } from '../../index';
import { User } from '../../entity/user.entity';
import bcryptjs from 'bcryptjs';
import { generateAndSetCookies } from '../../utils/generateAndSetCookies';

export const Login = async (req: Request, res: Response) => {
	const {password, telegramID} = req.body;

	if (isNaN(Number(telegramID))) {
		return res.status(400).send({
			type: "error",
			issueWith: "TelegramID",
			message: 'Invalid credentials'
		});
	}

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