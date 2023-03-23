import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	// TODO session in SSR
	return {
		props: {
			session: '',
		},
	};
}
