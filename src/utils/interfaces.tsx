import { ReactNode } from 'react';

export interface Item {
	key: string;
	name?: string;
	link?: string;
}

export interface Props {
	children?: ReactNode;
}
