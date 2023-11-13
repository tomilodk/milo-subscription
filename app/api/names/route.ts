import { firebase } from "@/lib/firebase";
import { getNames } from "@/lib/names";
import z from "zod";

export async function GET(req: Request) {
    const names = await getNames();

    return Response.json({ names });
}

const schema = z.object({
    name: z.string().min(1).max(10),
});

export async function POST(req: Request) {
    const result = schema.safeParse(await req.json());

    if (!result.success) {
        return new Response(JSON.stringify(result.error), { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for");

    const ipSnapshot = await firebase().firestore().collection('ips').where('ip', '==', ip).get();

    if (!ipSnapshot.empty) {
        return Response.json({ error: 'You have already entered...', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" });
    } else {
        await firebase().firestore().collection('ips').add({
            ip: ip,
        });
    }

    const nameSnapshot = await firebase().firestore().collection('names').where('name', '==', result.data.name).get();

    if (!nameSnapshot.empty) {
        return new Response("Name already exists...", { status: 400 });
    }

    await firebase().firestore().collection('names').add({
        name: result.data.name,
    });

    return Response.json({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" });
}