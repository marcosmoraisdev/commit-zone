import { Item } from '@/utils/types';

export const pages: Item[] = [
	{
		key: 'greetings',
		name: 'Getting Started',
		link: '/greetings',
	},
	{
		key: 'dashboard',
		name: 'Dashboard',
		link: '/dashboard',
		authenticated: true,
	},
	{
		key: 'wallets',
		name: 'Wallets',
		link: '/wallet',
		authenticated: true,
	},
	{
		key: 'transactions',
		name: 'Transactions',
		link: '/transaction',
		authenticated: true,
	},
	{
		key: 'charts',
		name: 'Charts',
		link: '/chart',
		authenticated: true,
	},
];
