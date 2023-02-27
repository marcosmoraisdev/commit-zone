import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken, JWT } from 'next-auth/jwt';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<JWT>
) {
	const token = await getToken({ req });

	if (!token) {
		throw Error('Token not found or invalid');
	}

	res.send(token);
}
