('use client');

import { useSDK } from '@metamask/sdk-react';
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function SignIn() {

	return (
		<div>
			<MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
		</div>
	);
}
