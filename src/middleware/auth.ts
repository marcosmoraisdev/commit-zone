import { pages } from '@/common/pages';
import { withAuth } from 'next-auth/middleware';

export default withAuth({
	callbacks: {
		authorized({ req, token }) {
			// if (req.nextUrl.pathname === '/admin') {
			// 	return token?.userRole === 'admin';
			// }
			return !!token;
		},
	},
});

export const config = {
	matcher: pages.filter((page) => page.authenticated),
};
