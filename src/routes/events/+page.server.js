// @ts-nocheck
import { firestore } from "$lib/firebase/firebase.app";

export async function load() {
    const events = await firestore.collection('Events').doc('Management').collection('allEvents').get();

    const eventsList = [];
    events.forEach(doc => {
      eventsList.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
        eventsList
    }
}