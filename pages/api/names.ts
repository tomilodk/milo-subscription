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
    switch (req.method) {
        case 'POST':
            return await handlePost(req, res);
        case 'GET':
            return await handleGet(req, res);
        default:
            res.status(405).json({ error: 'Method not allowed' });
            return;
    }

}

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
    const names = await getNames();

    res.status(200).json({ names });
};

export const getNames = async () => {
    const snapshot = await firebase().firestore().collection('names').get();
    const names = snapshot.docs.map((doc) => doc.data().name);

    return names;
}

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ error: result.error });
        return;
    }

    const ip = req.headers["x-forwarded-for"];

    const ipSnapshot = await firebase().firestore().collection('ips').where('ip', '==', ip).get();

    if (!ipSnapshot.empty) {
        res.status(200).json({ error: 'You have already entered...', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" });
        return;
    } else {
        await firebase().firestore().collection('ips').add({
            ip: ip,
        });
    }

    const nameSnapshot = await firebase().firestore().collection('names').where('name', '==', result.data.name).get();

    if (!nameSnapshot.empty) {
        res.status(400).json({ error: 'Name already exists' });
        return;
    }

    await firebase().firestore().collection('names').add({
        name: result.data.name,
    });

    res.status(200).json({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" });
};