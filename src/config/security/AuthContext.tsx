import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase from '../firebase';
import { Props } from '@/utils/types';

const auth = getAuth(firebase);

type AuthContextOptions = {
	user: User | null;
};

export const AuthContext = createContext({ user: null } as AuthContextOptions);
export const useAuthContext = () => useContext<AuthContextOptions>(AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
