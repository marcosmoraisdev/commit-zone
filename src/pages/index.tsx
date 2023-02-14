import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Layout from './_layout';

export default function Home() {
	return (
		<>
			<Layout>
				<Box>
					<Grid container>
						<Grid item xs={4}></Grid>
						<Grid item xs={4}></Grid>
						<Grid item xs={8}></Grid>
					</Grid>
				</Box>
			</Layout>
		</>
	);
}
