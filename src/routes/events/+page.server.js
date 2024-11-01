/* eslint-disable no-unused-vars */
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

export const actions = {
  default: async (event, render ) => {
    const formData = await event.request.formData();
    console.log(...formData);
   

    const emailAddress = formData.get("emailaddress");

    const newSubscriber = {
      emailAddress
    }

    await firestore
      .collection('Subscribers')
      .doc(emailAddress)
      .set(newSubscriber);

    return {
      success: "Subscribed!",
    }

  }
}