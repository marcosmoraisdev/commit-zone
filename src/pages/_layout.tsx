import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/Navbar';
import { Props } from '@/utils/interfaces';
import { Container } from '@mui/material';

export default function Layout({ children }: Props) {
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
