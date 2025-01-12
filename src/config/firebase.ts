('use client');
// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);
export const fireStore: Firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
export default firebase;
