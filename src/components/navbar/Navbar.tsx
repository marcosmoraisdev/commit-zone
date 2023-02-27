import logo from '@/../public/logo.svg';
import { pages } from '@/common/pages';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import Settings from './Settings';

export default function NavBar() {
	const { status } = useSession();
	const isAuthenticated = status === 'authenticated';
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	return (
		<AppBar position='sticky'>
			<Container className='max-w-none'>
				<Toolbar disableGutters>
					<Link href='/' component={NextLink}>
						<Image
							width={150}
							height={120}
							alt='logo'
							src={logo}
							className='hidden mr-1 lg:flex'
						/>
					</Link>
					<Box className='flex lg:grow lg:hidden'>
						<IconButton
							color='secondary'
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
							{pages
								.filter((page) => page.authenticated == isAuthenticated)
								.map((page) => (
									<MenuItem onClick={handleCloseNavMenu} key={page.key}>
										<Link
											sx={{ textDecoration: 'none' }}
											color='text.primary'
											href={page.link}
											component={NextLink}>
											{page.name}
										</Link>
									</MenuItem>
								))}
						</Menu>
					</Box>
					<Container className='flex justify-center lg:hidden'>
						<Link href='/' component={NextLink}>
							<Image width={150} height={120} alt='logo' src={logo} />
						</Link>
					</Container>
					<Box className='hidden ml-20 lg:grow lg:flex '>
						{pages
							.filter((page) => page.authenticated == isAuthenticated)
							.map((page) => (
								<Button
									component={NextLink}
									href={page.link}
									key={page.key}
									onClick={handleCloseNavMenu}
									className='block my-2'>
									<Typography color='text.primary'>{page.name}</Typography>
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
