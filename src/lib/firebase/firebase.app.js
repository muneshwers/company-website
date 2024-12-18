/* eslint-disable no-unused-vars */
// @ts-nocheck
import dotenv from 'dotenv';
dotenv.config();
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import {
	FIREBASE_TYPE, 
	PROJECT_ID,
	PRIVATE_KEY_ID,
	PRIVATE_KEY,
	CLIENT_EMAIL,
	CLIENT_ID,
	AUTH_URI,
	TOKEN_URI,
	AUTH_PROVIDER_CERT_URL,
	CLIENT_CERT_URL,
	UNIVERSAL_DOMAIN
 } from '$env/static/private';
// import serviceAccount from "../../../serviceAccountKey.json";

// @ts-ignore
// const service = serviceAccount;

const serviceCheck = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, "\n"),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
  universe_domain: process.env.UNIVERSAL_DOMAIN
}

let firebaseApp;

// console.log("Apps: ", getApps())

// if (!getApps().length) {
  firebaseApp = initializeApp({
    credential: cert(serviceCheck)
  }, "company-app-5");
// }


const firestore = getFirestore(firebaseApp, "company-website");

export {firestore}