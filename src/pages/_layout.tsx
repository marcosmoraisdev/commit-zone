import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/Navbar';
import { Props } from '@/utils/types';
import { Container } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';

export default function Layout({ children }: Props) {
	const router: NextRouter = useRouter();

	return (
		<>
			<NavBar />
			<Container className='min-h-screen max-w-none'>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
