import {
	Box,
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import React from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Settings() {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box className='grow-0'>
			<Tooltip title='Open settings'>
				<IconButton className='p-0' onClick={handleOpenUserMenu}>
					<Avatar alt='Marcos' src='/static/images/avatar/2.jpg' />
				</IconButton>
			</Tooltip>
			<Menu
				id='menu-appbar'
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
}
