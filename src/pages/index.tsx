import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Home() {
	return (
		<Grid container className='mt-5'>
			<Grid item xs={12}>
				<Card>
					<CardContent>
						Sit ipsum ex in id occaecat cupidatat. Do id est ullamco tempor
						nostrud veniam deserunt nostrud qui sit. Excepteur occaecat enim
						ullamco nisi. Ex exercitation cupidatat dolore ipsum veniam ipsum
						occaecat excepteur ad. Veniam ut eu deserunt excepteur qui sit elit
						ea commodo exercitation. Aute proident excepteur ea ullamco mollit
						voluptate velit dolor qui velit sit. Enim mollit aute dolor
						reprehenderit.
					</CardContent>
				</Card>
			</Grid>
			<Grid item className='mt-5' xs={12}>
				<Card>
					<CardContent>
						Ad id minim tempor ullamco incididunt mollit qui. Eu incididunt ad
						cillum reprehenderit commodo nostrud. Nostrud adipisicing est
						exercitation duis culpa. Tempor sunt proident sit ipsum proident in
						incididunt adipisicing esse occaecat eu laboris labore ut. Sint ad
						esse voluptate ipsum nulla magna veniam excepteur ex consectetur
						adipisicing ea anim ullamco.
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
