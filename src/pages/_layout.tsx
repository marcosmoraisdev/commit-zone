import Footer from '@/components/footer/footer';
import NavBar from '@/components/navbar/navbar';
import { Props } from '@/utils/interfaces';

export default function Layout({ children }: Props) {
	return (
		<>
			<div className='h-[7vh]'>
				<NavBar />
			</div>
			<div className='min-h-[93vh]'>
				<main>{children}</main>
			</div>

			<Footer />
		</>
	);
}
