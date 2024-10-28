// @ts-nocheck
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../../../serviceAccountKey.json";

// @ts-ignore
const service = serviceAccount;

const firebaseApp = initializeApp({
  credential: cert(service)
});

const firestore = getFirestore(firebaseApp, "company-website");

export {firestore}