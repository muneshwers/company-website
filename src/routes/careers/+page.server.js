// @ts-nocheck
import { firestore } from "$lib/firebase/firebase.app";

export async function load() {
    const jobs = await firestore.collection('Jobs').doc('Management').collection('Open').get();

    const jobsList = [];
    jobs.forEach(doc => {
      jobsList.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
        jobsList
    }
}