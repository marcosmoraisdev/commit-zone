('use client');

import { useCallback, useEffect } from 'react';
import firebase from '@/config/firebase';
import { getAuth } from 'firebase/auth';

export default function SignIn() {
	const loadFirebaseui = useCallback(async () => {
		const firebaseui = await import('firebaseui');
		const firebaseauth = await import('firebase/auth');
		const firebaseUi =
			firebaseui.auth.AuthUI.getInstance() ||
			new firebaseui.auth.AuthUI(getAuth(firebase));
		firebaseUi.start('#firebaseui-auth-container', {
			signInSuccessUrl: '/dashboard',
			signInOptions: [
				{
					provider: firebaseauth.EmailAuthProvider.PROVIDER_ID,
					requireDisplayName: false,
				},
				firebaseauth.GoogleAuthProvider.PROVIDER_ID,
			],
		});
	}, []);

	useEffect(() => {
		loadFirebaseui();
	}, [loadFirebaseui]);

	return <div id='firebaseui-auth-container'></div>;
}
