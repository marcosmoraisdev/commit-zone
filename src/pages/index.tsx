import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Layout from './_layout';

export default function Home() {
	return (
		<>
			<Layout>
				<Box>
					<Grid container>
						<Grid item xs={4}>
							opa
						</Grid>
						<Grid item xs={4}>
							ipa
						</Grid>
						<Grid item xs={8}>
							upa
						</Grid>
					</Grid>
				</Box>
			</Layout>
		</>
	);
}
