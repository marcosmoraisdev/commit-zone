import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			session: await getServerSession(context.req, context.res, authOptions),
		},
	};
}
