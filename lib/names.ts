import { firebase } from "./firebase";

export const getNames = async (): Promise<string[]> => {
    const snapshot = await firebase().firestore().collection('names').get();
    const names = snapshot.docs.map((doc) => doc.data().name);

    return names;
};