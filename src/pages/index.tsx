import { useSDK } from '@metamask/sdk-react-ui';
export default function Home() {

	const {account} = useSDK();
	return <h1>{account}</h1>;
}
