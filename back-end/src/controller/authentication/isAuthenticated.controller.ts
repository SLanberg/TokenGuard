import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { dataSource } from '../../index';
import { User } from '../../entity/user.entity';

export const AuthenticatedUser = async (req: Request, res: Response) => {
	try {
		const cookie = req.body.session;

		if (!cookie) {
			return res.status(401).send({
				message: 'unauthenticated'
			});
		}

		const payload: any = verify(cookie, process.env.ACCESS_SECRET || '');

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

		// Don't want to send password there
		const {id, created_at, telegram_id, balance} = user;

		res.send({
			id,
			created_at,
			telegram_id,
			balance
		});
	} catch (e) {
		return res.status(401).send({
			message: 'unauthenticated'
		});
	}
}
