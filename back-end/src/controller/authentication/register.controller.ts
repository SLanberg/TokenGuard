import { Request, Response } from 'express';
import { dataSource } from '../../index';
import { User } from '../../entity/user.entity';
import { isPasswordValid } from '../../utils/isPasswordValid';
import bcryptjs from 'bcryptjs';
import { generateAndSetCookies } from '../../utils/generateAndSetCookies';
import { SecretCode } from '../../entity/secretCode.entity';
import { SecurityToken } from '../../entity/securityToken.entity';
import { generateToken } from '../../utils/tokenGeneration';

export const Register = async (req: Request, res: Response) => {
	// This should be done of course at the back-end and be hashed.
	const secretKey: bigint = BigInt("94592942990");

	const {password, confirmPassword, telegramID} = req.body;

	try {
		await dataSource.transaction(async transactionalEntityManager => {
			const isUserInDb = await transactionalEntityManager.getRepository(User).count({
				where: { telegram_id: telegramID, },
			});

			if (isUserInDb !== 0) {
				return res.status(409).json({
					type: "error",
					issueWith: "TelegramID",
					message: "Telegram ID already used"});
			}

			if (!isPasswordValid(password)) {
				return res.status(400).json({
					type: "error",
					issueWith: "Password",
					message: "Password does not meet complexity requirements"
				});
			}

			if (password !== confirmPassword) {
				return res.status(400).json({
					type: "error",
					issueWith: "Confirm password",
					message: "Passwords don't match"
				});
			}

			const user = await transactionalEntityManager.getRepository(User).save({
				telegram_id: telegramID,
				password: await bcryptjs.hash(password, 12),
			});

			if (!user) {
				throw new Error("User creation failed");
			}

			const accessTokenSecret = process.env.ACCESS_SECRET || '';
			const refreshTokenSecret = process.env.REFRESH_SECRET || '';
			generateAndSetCookies(user.id, accessTokenSecret, refreshTokenSecret, res);

			const secretCode = await transactionalEntityManager.getRepository(SecretCode).save({
				code: secretKey,
			});

			const userAddedToDB = await transactionalEntityManager.getRepository(User).findOne({
				where: {telegram_id: (telegramID)}
			});

			const securityToken = await transactionalEntityManager.getRepository(SecurityToken).save({
				user_id: user.id,
				secret_code_id: secretCode.id,
				security_token: generateToken(user.id),
			});

			return res.send({
				status: 200,
				type: 'success',
				securityToken: securityToken,
				user: userAddedToDB
			});
		});
	} catch (e) {
		return res.status(500).json({type: "error", response: e});
	}
}