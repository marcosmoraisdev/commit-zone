import { createTheme } from '@mui/material/styles';

// $white: #ffffffff;
// $lavender-web: #d2ddeeff;
// $true-blue: #3066beff;
// $zaffre: #0a0daeff;

export const theme = createTheme({
	palette: {
		primary: {
			main: '#3066beff',
		},
		secondary: {
			main: '#ffffffff',
		},
		text: {
			secondary: '#d2ddeeff',
		},
		mode: 'light',
	},
});
