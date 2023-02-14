import Footer from '@/components/footer/footer';
import NavBar from '@/components/navbar/navbar';
import { Props } from '@/utils/interfaces';
import { Container } from '@mui/material';

export default function Layout({ children }: Props) {
	return (
		<>
			<NavBar />
			<Container className='min-h-screen'>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
