('use client');

import signIn from '@/services/auth.service';
import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignIn() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleForm = async (event: any) => {
		event.preventDefault();
		await signIn(email, password);
		return router.push('/');
	};

	return (
		<div>
			<Button color='primary' onClick={handleOpen}>
				Login
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box bgcolor='white'>
					<div className='wrapper'>
						<div className='form-wrapper'>
							<h1 className='mt-60 mb-30'>Sign in</h1>
							<form onSubmit={handleForm} className='form'>
								<label htmlFor='email'>
									<p>Email</p>
									<input
										onChange={(e) => setEmail(e.target.value)}
										required
										type='email'
										name='email'
										id='email'
										placeholder='example@mail.com'
									/>
								</label>
								<label htmlFor='password'>
									<p>Password</p>
									<input
										onChange={(e) => setPassword(e.target.value)}
										required
										type='password'
										name='password'
										id='password'
										placeholder='password'
									/>
								</label>
								<button type='submit'>Sign in</button>
							</form>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
