import type { NextApiRequest, NextApiResponse } from 'next'
import z from 'zod';
import { firebase } from '../../lib/firebase';

const schema = z.object({
    name: z.string().min(1).max(10),
});


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const result = schema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ error: result.error });
        return;
    }
    const nameSnapshot = await firebase.firestore().collection('names').where('name', '==', result.data.name).get();

    if (!nameSnapshot.empty) {
        res.status(400).json({ error: 'Name already exists' });
        return;
    }

    await firebase.firestore().collection('names').add({
        name: result.data.name,
    });

    res.status(200).json({ name: result.data.name });
}