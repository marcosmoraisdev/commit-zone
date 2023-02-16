import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import { useState } from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Settings() {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography className='text-center'>{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);

	function handleOpenUserMenu(event: React.MouseEvent<HTMLElement>) {
		setAnchorElUser(event.currentTarget);
	}

	function handleCloseUserMenu() {
		setAnchorElUser(null);
	}
}
