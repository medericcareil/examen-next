import dayjs from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next'
import { DeployResponse } from '@/types/deployResponse';

export default function handler(req: NextApiRequest, res: NextApiResponse<DeployResponse>) {
    const date = req.query.date ? dayjs(req.query.date as string) : dayjs();
    res.status(200).json({ date: date.toISOString(), validated: date.day() !== 5 });
}
