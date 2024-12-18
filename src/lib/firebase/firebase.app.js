// @ts-nocheck
import { initializeApp, cert } from "firebase-admin/app";
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
  type: FIREBASE_TYPE,
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/\\n/gm, "\n"),
  client_email: CLIENT_EMAIL,
  client_id: CLIENT_ID,
  auth_uri: AUTH_URI,
  token_uri: TOKEN_URI,
  auth_provider_x509_cert_url: AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: CLIENT_CERT_URL,
  universe_domain: UNIVERSAL_DOMAIN
}

const firebaseApp = initializeApp({
  credential: cert(serviceCheck)
});

const firestore = getFirestore(firebaseApp, "company-website");

export {firestore}