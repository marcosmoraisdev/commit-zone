import firebase from '@/config/firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
	UserCredential,
} from 'firebase/auth';

const auth = getAuth(firebase);

export async function signUp(
	email: string,
	password: string
): Promise<UserCredential> {
	let userCredential = null;
	try {
		userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		if (!userCredential) {
			throw new Error('Error while creating user');
		}
	} catch (e) {
		throw e;
	}

	return userCredential;
}

export default async function signIn(
	email: string,
	password: string
): Promise<UserCredential> {
	let userCredential = null;
	try {
		userCredential = await signInWithEmailAndPassword(auth, email, password);

		if (!userCredential) {
			throw new Error('Error while signing in');
		}
	} catch (e) {
		throw e;
	}

	return userCredential;
}
