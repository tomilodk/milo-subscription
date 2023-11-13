import { firebase } from "./firebase";

export async function getNames(): Promise<string[]>{
    const snapshot = await firebase().firestore().collection('names').get();
    const names = snapshot.docs.map((doc) => doc.data().name);

    return names;
}