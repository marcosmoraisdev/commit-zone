import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[900],
		},
		secondary: {
			main: '#e2ebf9',
		},
		background: {
			default: '#2f3030',
			paper: blueGrey[800],
		},
		text: {
			primary: '#e2ebf9',
		},
	},
});
