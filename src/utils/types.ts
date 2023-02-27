import { ReactNode } from 'react';

export type Item = {
	key: string;
	name?: string;
	link?: string;
	handler?(event: React.MouseEvent<HTMLElement>): void;
	authenticated?: boolean;
};

export type Props = {
	children?: ReactNode;
};
