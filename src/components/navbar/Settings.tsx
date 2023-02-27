import { Item } from '@/utils/types';
import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Settings() {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const router = useRouter();

	const settings: Item[] = [
		{
			key: 'profile',
			name: 'Profile',
		},
		{
			key: 'account',
			name: 'Account',
		},
		{
			key: 'dashboard',
			name: 'Dashboard',
		},
		{
			key: 'logout',
			name: 'Logout',
			handler: handleLogout,
		},
	];

	return (
		<Box className='grow-0'>
			<Tooltip title='Open settings'>
				<IconButton
					color='secondary'
					className='p-0'
					onClick={handleOpenUserMenu}>
					<Avatar
						color='secondary'
						alt='Marcos'
						src='/static/images/avatar/2.jpg'
					/>
				</IconButton>
			</Tooltip>
			<Menu
				id='menu-appbar'
				color='secondary'
				className='mt-2'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}>
				{settings.map((setting) => (
					<MenuItem key={setting.key} onClick={handleCloseUserMenu}>
						<Typography onClick={setting.handler} className='text-center'>
							{setting.name}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);

	function handleLogout() {
		// TODO logout
		fetch('http://localhost:3000/api/auth/signout')
			.then((res) => res.json())
			.then(() => router.push('/auth/signin'))
			.catch((err) => {
				console.error(err);
				router.push('/auth/signin');
			});
	}

	function handleOpenUserMenu(event: React.MouseEvent<HTMLElement>) {
		setAnchorElUser(event.currentTarget);
	}

	function handleCloseUserMenu() {
		setAnchorElUser(null);
	}
}
