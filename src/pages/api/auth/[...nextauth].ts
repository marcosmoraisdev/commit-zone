import NextAuth, { AuthOptions, Awaitable, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const mockUser: Awaitable<User | null> = {
	id: '1',
	name: 'Jon Smith',
	email: 'jsmith@example.com',
	image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
};

export const authOptions: AuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		process.env.VERCEL_ENV !== 'production'
			? CredentialsProvider({
					name: 'Credentials',
					credentials: {
						username: {
							label: 'Username',
							type: 'text',
							placeholder: 'Username',
						},
						password: {
							label: 'Password',
							type: 'password',
							placeholder: '***',
						},
					},
					async authorize() {
						return mockUser;
					},
			  })
			: GoogleProvider({
					clientId: process.env.GOOGLE_ID,
					clientSecret: process.env.GOOGLE_SECRET,
			  }),
	],
	callbacks: {
		async jwt({ token, account }: any) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
	},
};
export default NextAuth(authOptions);
