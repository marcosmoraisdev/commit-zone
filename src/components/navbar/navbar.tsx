import { Item } from '@/utils/interfaces';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import Settings from './settings';

const pages: Item[] = [
	{
		key: 'dashboard',
		name: 'Dashboard',
		link: '/dashboard',
	},
	{
		key: 'wallets',
		name: 'Wallets',
		link: '/wallet',
	},
	{
		key: 'transactions',
		name: 'Transactions',
		link: '/transaction',
	},
	{
		key: 'charts',
		name: 'Charts',
		link: '/chart',
	},
];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	return (
		<AppBar className='h-full' position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon className='hidden mr-1 lg:flex' />
					<Box className='flex lg:grow lg:hidden'>
						<IconButton
							className='text-white'
							size='large'
							onClick={handleOpenNavMenu}>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							className='mt-1 lg:hidden'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}>
							{pages.map((page) => (
								<MenuItem key={page.key}>
									<Link href={{ href: page.link }}>
										<Typography className='text-center'>{page.name}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon className='flex grow lg:hidden' />
					<Box className='hidden lg:grow lg:flex'>
						{pages.map((page) => (
							<Button
								key={page.key}
								onClick={handleCloseNavMenu}
								className='block my-2 text-white'>
								{page.name}
							</Button>
						))}
					</Box>
					<Settings></Settings>
				</Toolbar>
			</Container>
		</AppBar>
	);

	function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
		setAnchorElNav(event.currentTarget);
	}

	function handleCloseNavMenu(event: React.MouseEvent<HTMLElement>) {
		setAnchorElNav(null);
	}
}
