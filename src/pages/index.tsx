import { useSDK } from '@metamask/sdk-react-ui';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Home() {

	const {account} = useSDK();
	return <h1>{account}</h1>;
}
