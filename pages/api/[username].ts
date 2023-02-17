// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../db.json';

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
	const data = JSON.parse(JSON.stringify(Data));
	const { username } = req.query;
	const prashant = data.prashantamoli;
	res.status(200).json({ ...prashant });
}
